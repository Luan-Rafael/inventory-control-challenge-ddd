import { UniqueIdentityId } from "@/core/entities/unique-identity-id"
import { Movement } from "../entities/movement"
import { ProcessSaleUseCase } from "./process-sale-usecase"
import { RegisterStockMovementUseCase } from "./register-stock-movement-usecase"
import { SaleConfirmedEvent } from "../events/sale-confirmed-event"

test("should process a sale and update stock", () => {
    const movements = [
        Movement.create({
            amount: 1,
            productId: new UniqueIdentityId("1"),
        }),
        Movement.create({
            amount: 1,
            productId: new UniqueIdentityId("1"),
        }),
        Movement.create({
            amount: 1,
            productId: new UniqueIdentityId("1"),
        }),
        Movement.create({
            amount: 1,
            productId: new UniqueIdentityId("1"),
        }),
        Movement.create({
            amount: 1,
            productId: new UniqueIdentityId("1"),
        }),
        Movement.create({
            amount: 1,
            productId: new UniqueIdentityId("1"),
        })
    ]

    const usecase = new ProcessSaleUseCase()
    const registerStock = new RegisterStockMovementUseCase()

    const sale = usecase.execute({
        amount: 1,
        customerId: new UniqueIdentityId('1'),
        productId: new UniqueIdentityId('1')
    })

    movements.push(registerStock.execute(new SaleConfirmedEvent(new UniqueIdentityId('1'), 1)))

    const amountCurrent = movements.reduce((acc, cur) => acc += cur.amount, 0)

    expect(amountCurrent).toEqual(5)

})