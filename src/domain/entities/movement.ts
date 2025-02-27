import { Entity } from "@/core/entities/entity"
import { UniqueIdentityId } from "@/core/entities/unique-identity-id"
import { Optional } from "@/core/types/options"

interface MovementProps {
    productId: string,
    amount: number,
    createdAt: Date
}

export class Movement extends Entity<MovementProps> {
    static create(props: Optional<MovementProps, 'createdAt'>, id?: UniqueIdentityId) {
        const product = new Movement({ ...props, createdAt: new Date() }, id)
        return product
    }
}