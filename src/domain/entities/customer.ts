import { Entity } from "@/core/entities/entity";
import { Optional } from "@/core/types/options";

interface CustomerProps {
    name: string,
    score: number,
    createdAt: Date,
}


export class Customer extends Entity<CustomerProps> {
    static create(props: Optional<CustomerProps, 'createdAt'>, id?: string) {
        const product = new Customer({ ...props, createdAt: new Date() }, id)
        return product
    }
}