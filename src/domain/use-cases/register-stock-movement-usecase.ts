import { Movement } from "../entities/movement";
import { SaleConfirmedEvent } from "../events/sale-confirmed-event";

export class RegisterStockMovementUseCase {
    execute(event: SaleConfirmedEvent) {
        const movement = Movement.create({
            productId: event.productId,
            amount: event.amount
        })

        return movement
    }
}