import Product from "../models/Products";


export function calculateDiscount(product: Product) {
    let discount = product.discountPercentage * .01;
    let dollarAmount = product.price * discount;
    return `${product.title} has a discount of $${dollarAmount.toFixed(2)}, with email sign up only!`;
}