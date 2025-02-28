import { UniqueIdentityId } from "@/core/entities/unique-identity-id";
import { Movement } from "../entities/movement";
import { IMovementRepositoryImpl } from "./movement-repository-impl";

export class MovementRepository implements IMovementRepositoryImpl {
    async save(movement: Movement): Promise<void> {
        return
    }
    async getProductBalance(productId: UniqueIdentityId): Promise<number> {
        return 1; 
    }
}