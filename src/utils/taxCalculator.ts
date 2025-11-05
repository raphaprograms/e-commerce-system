import type Product from "../models/Products";


export function calculateTax(product: Product) {
    let taxRate = null;
    if(product.category == 'groceries') {
        taxRate = 0.03;
    } else {
        taxRate = 0.0475;
    }
    let taxedPrice = product.price * (1 + taxRate);
    return `Final price with tax is $${taxedPrice.toFixed(2)}`;
}