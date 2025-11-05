

export default class Product {
    price: number;
    title: string;
    id: number;
    discountPercentage: number;
    category: string;

    constructor(title: string, price: number, id: number, discountPercentage: number, category: string) {
        this.title = title;
        this.price = price;
        this.id = id;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }

    displayProductDetails() {
        return `${this.title}, product ID:${this .id}, costs $${this.price}`
    }

    getPriceWithDiscount() {
        let discountedPrice = this.price * (1 - (this.discountPercentage * .01))
        return `The discounted price is $${discountedPrice.toFixed(2)} (plus tax)`;
    }
}

