import { Entity } from "@/core/entities/entity"
import { UniqueIdentityId } from "@/core/entities/unique-identity-id"
import { Optional } from "@/core/types/options"

interface MovementProps {
    productId: UniqueIdentityId,
    amount: number,
    createdAt: Date
}

export class Movement extends Entity<MovementProps> {
    get productId() {
        return this.props.productId
    }
    get amount() {
        return this.props.amount
    }
    get createdAt() {
        return this.props.createdAt
    }
    static create(props: Optional<MovementProps, 'createdAt'>, id?: UniqueIdentityId) {
        const product = new Movement({ ...props, createdAt: new Date() }, id)
        return product
    }
}