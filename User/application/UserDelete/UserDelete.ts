import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFound";


export class UserDelete  {
    constructor(private repository: UserRepository){}

    async run(id: string): Promise<void>{   //se obtiene los primitivos dominios de control
        await this.repository.delete(new UserId(id))
    }
}