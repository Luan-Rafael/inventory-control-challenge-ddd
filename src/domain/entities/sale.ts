import { Entity } from "@/core/entities/entity";
import { UniqueIdentityId } from "@/core/entities/unique-identity-id";
import { Optional } from "@/core/types/options";

interface SaleProps {
    productId: string,
    customerId: string,
    amount: number,
    createdAt: Date
}

export class Sale extends Entity<SaleProps> {
    static create(props: Optional<SaleProps, 'createdAt'>, id?: UniqueIdentityId) {
        const product = new Sale({ ...props, createdAt: new Date() }, id)
        return product
    }
}