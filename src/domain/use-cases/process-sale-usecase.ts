import { UniqueIdentityId } from "@/core/entities/unique-identity-id";
import { Sale } from "../entities/sale";
import { DomainEventDispatcher } from "@/core/events/domain-events-dispatcher";
import { SaleConfirmedEvent } from "../events/sale-confirmed-event";

interface ProcessSaleUseCaseProps {
    productId: UniqueIdentityId,
    customerId: UniqueIdentityId,
    amount: number,
}

export class ProcessSaleUseCase {
    execute(props: ProcessSaleUseCaseProps) {
        const sale = Sale.create({
            amount: props.amount,
            productId: props.productId,
            customerId: props.customerId,
        })

        DomainEventDispatcher.dispatch(new SaleConfirmedEvent(props.productId, props.amount * -1))

        return sale
    }
}