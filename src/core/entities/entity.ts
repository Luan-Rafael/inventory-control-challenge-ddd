import { UniqueIdentityId } from "./unique-identity-id"

export class Entity<T> {
    public props: T
    public id: UniqueIdentityId

    protected constructor(props: T, id?: UniqueIdentityId) {
        this.props = props
        this.id = id ?? new UniqueIdentityId()
    }
}