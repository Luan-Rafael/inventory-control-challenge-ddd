import { randomUUID } from "crypto"

export class Entity<T> {
    public props: T
    public id: string

    protected constructor(props: T, id?: string) {
        this.props = props
        this.id = id ?? randomUUID()
    }
}