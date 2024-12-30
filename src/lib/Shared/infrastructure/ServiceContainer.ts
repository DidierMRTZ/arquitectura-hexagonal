import { UserCreate } from "../../User/application/UserCreate/UserCreate";
import { UserEdit } from "../../User/application/UserEdit/UserEdit";
import { UserDelete } from "../../User/application/UserDelete/UserDelete";
import { UserGetAll } from "../../User/application/UserGetAll/UserGetAll";
import { UserGetByID } from "../../User/application/UserGetById/UserGetById";
import { InMemoryUserRepository } from "../../User/infrastructure/InMemoryUserRepository";

// Repositorio de postgres o en memoria
const userRepository = new InMemoryUserRepository()

// contenedor para caso de uso
export const ServiceContainer = {
    user: {
        create: new UserCreate(userRepository),
        getAll: new UserGetAll(userRepository),
        getOneById: new UserGetByID(userRepository),
        edit: new UserEdit(userRepository),
        delete: new UserDelete(userRepository)
    }
}