// interface para User
import { User } from "./User"
import { UserId } from "./UserId"

export interface UserRepository {
    create(user: User): Promise<void>  // Practica para modifica el estado devuelvan void metodos para caso de uso
    getAt(): Promise<User[]>   //lista
    getOneById(id: UserId) : Promise<User | null>
    edit(user: User): Promise<void>
    delete(id: UserId): Promise<void>
}
