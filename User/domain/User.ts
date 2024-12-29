// Entidades de dominio
import { UserEmail } from "./UserEmail"
import { UserId } from "./UserId"
import { UserName } from "./UserName"
import { UserCreatedAt } from "./UserCreatedAt"

export class User {
    id: UserId
    name: UserName
    email: UserEmail
    createdAt: UserCreatedAt

    constructor(id: UserId, name: UserName,email: UserEmail,createdAt: UserCreatedAt){
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    // servicios de Dominio
    public nameAndEmail() {
        return `${this.name} ${this.email}`
    }
}