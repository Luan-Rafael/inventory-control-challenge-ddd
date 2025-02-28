import { UniqueIdentityId } from "@/core/entities/unique-identity-id";
import { Sale } from "../entities/sale";
import { DomainEventDispatcher } from "@/core/events/domain-events-dispatcher";
import { SaleConfirmedEvent } from "../events/sale-confirmed-event";
import { ISaleRepositoryImpl } from "../repositories/sale-repository-impl";
import { IMovementRepositoryImpl } from "../repositories/movement-repository-impl";
import { Movement } from "../entities/movement";

interface ProcessSaleUseCaseProps {
    productId: UniqueIdentityId,
    customerId: UniqueIdentityId,
    amount: number,
}

export class ProcessSaleUseCase {

    constructor(
        private readonly _movementRepository: IMovementRepositoryImpl,
        private readonly _saleRepository: ISaleRepositoryImpl,
    ) { }


    async execute(props: ProcessSaleUseCaseProps): Promise<Sale> {
        const amountCurrent = await this._movementRepository.getProductBalance(props.productId)

        if (amountCurrent < props.amount) {
            throw new Error("Saldo insuficiente para processar a venda.")
        }

        const sale = Sale.create({
            amount: props.amount,
            productId: props.productId,
            customerId: props.customerId,
        })

        await this._saleRepository.save(sale);

        DomainEventDispatcher.dispatch(new SaleConfirmedEvent(props.productId, props.amount * -1))

        return sale
    }
}