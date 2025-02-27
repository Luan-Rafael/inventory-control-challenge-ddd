import { Entity } from "@/core/entities/entity";
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
    static create(props: Optional<ProductProps, 'createdAt'>, id?: string) {
        const product = new Product({ ...props, createdAt: new Date() }, id)
        return product
    }
}