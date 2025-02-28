import { Sale } from "../entities/sale";
import { ISaleRepositoryImpl } from "./sale-repository-impl";

export class SaleRepository implements ISaleRepositoryImpl {
    async save(sale: Sale) {
        return;
    }

}