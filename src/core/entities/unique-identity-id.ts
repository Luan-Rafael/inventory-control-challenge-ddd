import { randomUUID } from "crypto"

export class UniqueIdentityId {
    private _value: string

    get toString() {
        return this._value
    }

    get toValue() {
        return this._value
    }
    constructor(value?: string) {
        this._value = value ?? randomUUID();
    }
}