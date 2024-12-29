import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFound";


export class UserGetByID {
    constructor(private repository: UserRepository){}

    async run(id: string): Promise<User>{   //se obtiene los primitivos dominios de control
        const user = await this.repository.getOneById(new UserId(id))
        if (!user) throw new UserNotFoundError('User not Found') // returna 404 errores de dominio
        return user
    }
}