import { Entity } from "@/core/entities/entity";
import { UniqueIdentityId } from "@/core/entities/unique-identity-id";
import { Optional } from "@/core/types/options";

interface ProductProps {
    name: string
    description: string
    minAmount: number
    size: string
    color: string
    createdAt: Date
}

export class Product extends Entity<ProductProps> {
    get name() {
        return this.props.name
    }
    get description() {
        return this.props.description
    }
    get minAmount() {
        return this.props.minAmount
    }
    get size() {
        return this.props.size
    }
    get color() {
        return this.props.color
    }
    get createdAt() {
        return this.props.createdAt
    }
    static create(props: Optional<ProductProps, 'createdAt'>, id?: UniqueIdentityId) {
        const product = new Product({ ...props, createdAt: new Date() }, id)
        return product
    }
}