import Product from './models/Products';
import { calculateTax }from './utils/taxCalculator';
import { calculateDiscount } from './utils/discountCalculator';
import { getProducts } from './services/apiService';


// fetch products
async function fetchLogProducts(){
    try {
        const unmappedProducts: Product[] = await getProducts();

        const products = unmappedProducts.map(unmappedProduct => {
            return new Product(
                unmappedProduct.title,
                unmappedProduct.price,
                unmappedProduct.id,
                unmappedProduct.discountPercentage,
                unmappedProduct.category
            );
        })

        console.log(products);
        console.log(products[0]);
        console.log(products[0].displayProductDetails());
        console.log(calculateTax(products[0]));
        console.log(products[0].getPriceWithDiscount());
        console.log(calculateDiscount(products[0]));

        console.log(products[18]);
        console.log(products[18].displayProductDetails());
        console.log(calculateTax(products[18]));
        console.log(products[18].getPriceWithDiscount());
        console.log(calculateDiscount(products[18]));
        

    } catch (error) {
        console.error(error);
    }
}

fetchLogProducts();