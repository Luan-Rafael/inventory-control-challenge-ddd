import { Entity } from "@/core/entities/entity"
import { Optional } from "@/core/types/options"

interface MovementProps {
    productId: string,
    amount: number,
    createdAt: Date
}

export class Movement extends Entity<MovementProps> {
    static create(props: Optional<MovementProps, 'createdAt'>, id?: string) {
        const product = new Movement({ ...props, createdAt: new Date() }, id)
        return product
    }
}