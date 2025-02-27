import { UniqueIdentityId } from "@/core/entities/unique-identity-id";

export class SaleConfirmedEvent {
    constructor(
        public readonly productId: UniqueIdentityId,
        public readonly amount: number
    ) { }
}
