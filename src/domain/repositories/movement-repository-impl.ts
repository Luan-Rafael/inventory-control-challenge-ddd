import { UniqueIdentityId } from "@/core/entities/unique-identity-id";
import { Movement } from "../entities/movement";

export interface IMovementRepositoryImpl {
    save(movement: Movement): Promise<void>
    getProductBalance(productId: UniqueIdentityId): Promise<number>
}