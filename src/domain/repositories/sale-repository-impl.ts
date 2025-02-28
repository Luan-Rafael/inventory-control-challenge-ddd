import { Sale } from "../entities/sale";

export interface ISaleRepositoryImpl {
    save(sale: Sale): Promise<void>
}