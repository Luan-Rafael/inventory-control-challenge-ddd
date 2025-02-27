import { randomUUID } from "crypto"

export class UniqueIdentityId {
    private _value: string

    toString() {
        return this._value
    }

    toValue() {
        return this._value
    }
    constructor(value?: string) {
        this._value = value ?? randomUUID();
    }
}