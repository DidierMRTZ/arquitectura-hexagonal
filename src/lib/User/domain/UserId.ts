// value object UserId

import { error } from "console";

export class UserId {
    value: string;
    constructor (value: string){
        this.value = value
    }

    private ensureIsValid() {
        if (this.value.length < 5){
            throw new Error("UserId must be at least 5")
        }
    }
}