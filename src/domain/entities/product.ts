import { Entity } from "@/core/entities/entity";

interface ProductProps {
    minAmount: number,
    currentAmount: number,
}

export class Product extends Entity<ProductProps> {
}