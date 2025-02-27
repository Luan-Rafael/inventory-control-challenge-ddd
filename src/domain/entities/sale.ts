import { Entity } from "@/core/entities/entity";
import { UniqueIdentityId } from "@/core/entities/unique-identity-id";
import { Optional } from "@/core/types/options";

interface SaleProps {
    productId: UniqueIdentityId,
    customerId: UniqueIdentityId,
    amount: number,
    createdAt: Date
}

export class Sale extends Entity<SaleProps> {
    get productId() {
        return this.props.productId
    }
    get customerId() {
        return this.props.customerId
    }
    get amount() {
        return this.props.amount
    }
    get createdAt() {
        return this.props.createdAt
    }


    static create(props: Optional<SaleProps, 'createdAt'>, id?: UniqueIdentityId) {
        const product = new Sale({ ...props, createdAt: new Date() }, id)
        return product
    }
}