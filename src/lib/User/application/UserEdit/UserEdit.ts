import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserEmail } from "../../domain/UserEmail";
import { UserCreatedAt } from "../../domain/UserCreatedAt";


export class UserEdit {
    constructor(private repository: UserRepository){}

    async run(id: string, name: string, email: string): Promise<void>{   //se obtiene los primitivos
        const user = new User(new UserId(id),new UserName(name),new UserEmail(email),new UserCreatedAt(new Date()))
        return this.repository.edit(user)
    }
}