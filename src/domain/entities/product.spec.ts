import { Product } from './product'

test("should created product", () => {
    const product = Product.create({
        name: "bola",
        description: "Bola redonda",
        color: "red",
        minAmount: 10,
        size: "10"
    }, "111")

    expect(product.id).toEqual('111')
})