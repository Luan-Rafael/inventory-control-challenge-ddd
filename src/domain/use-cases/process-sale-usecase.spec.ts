import { UniqueIdentityId } from "@/core/entities/unique-identity-id" 
import { ProcessSaleUseCase } from "./process-sale-usecase" 
import { IMovementRepositoryImpl } from "../repositories/movement-repository-impl"
import { SaleRepository } from "../repositories/sale-repository"
import { Mocked } from "vitest"
import { fn } from "@vitest/spy"

describe("ProcessSaleUseCase", async () => {
    let processSaleUseCase: ProcessSaleUseCase;
    let movementRepository: Mocked<IMovementRepositoryImpl>;
    let saleRepository: Mocked<SaleRepository>;

    beforeEach(() => {
        movementRepository = {
            getProductBalance: fn(),
            save: fn()
        } as Mocked<IMovementRepositoryImpl>;

        saleRepository = {
            save: fn(),
        } as Mocked<SaleRepository>;

        processSaleUseCase = new ProcessSaleUseCase(movementRepository, saleRepository);
    });


    test("deve lançar um erro quando não há saldo suficiente", async () => {
        movementRepository.getProductBalance.mockResolvedValue(2);

        await expect(processSaleUseCase.execute({
            amount: 3,
            customerId: new UniqueIdentityId("1"),
            productId: new UniqueIdentityId("1")
        }))
            .rejects
            .toThrow("Saldo insuficiente para processar a venda.");


    });


})