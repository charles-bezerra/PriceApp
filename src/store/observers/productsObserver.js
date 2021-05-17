import { notFountKeyUtil } from "../../util";

let productActions = {};

productActions.ADD = (_, action) => {
    notFountKeyUtil(action.payload, "products");

    let newProducts = [];
    newProducts.push(...action.payload.products);
    
    return newProducts;
}

productActions.SET = (_, action) => {
    notFountKeyUtil(action.payload, "products");
    return action.payload.products;
}

productActions.RESET = () => [];

productActions.DELETE = (products, action) => {
    notFountKeyUtil(action.payload, "product");
    return products.filter( (product) => product.barcode !== action.payload.product.barcode );
}

export default productActions;



