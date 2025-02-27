import { UniqueIdentityId } from "./unique-identity-id"

export class Entity<T> {
    protected props: T
    protected id: UniqueIdentityId

    protected constructor(props: T, id?: UniqueIdentityId) {
        this.props = props
        this.id = id ?? new UniqueIdentityId()
    }
}