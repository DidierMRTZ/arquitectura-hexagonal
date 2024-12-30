// value object UserId

import { error } from "console";

export class UserName {
    value: string;
    constructor (value: string){
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (this.value.length > 6){
            throw new Error("UserId must be at least 5")
        }
    }
}