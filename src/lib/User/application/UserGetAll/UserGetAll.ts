import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserEmail } from "../../domain/UserEmail";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserRepository } from "../../domain/UserRepository";


export class UserGetAll {
    constructor(private repository: UserRepository){}

    async run(): Promise<User[]>{   //se obtiene los primitivos
        return this.repository.getAll()
    }
    
}