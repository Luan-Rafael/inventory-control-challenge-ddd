
import { Product } from './product'

test("should created product", () => {
    const product = new Product({
        currentAmount: 12,
        minAmount: 20
    }, "111")
    expect(product.id).toEqual('111')
})