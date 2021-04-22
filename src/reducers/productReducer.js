import { initialProduct } from "../constants";
import { notFountKeyUtil } from "../util";

export default function productReducer(product, action) {
    let newProduct = product;

    switch (action.type) {
        case 'CHANGE':
            notFountKeyUtil(action.payload, "fieldName");
            notFountKeyUtil(action.payload, "value");

            newProduct = { 
                ...product,
                [action.payload.fieldName]: action.payload.value
            }            

            break;

        case 'SET':
            notFountKeyUtil(action.payload, "product");
            newProduct = action.payload.product;
            break;
        
        case 'RESET':
            newProduct = initialProduct;
            break;
        
        case 'DELETE': 
            break;

        default:
            throw new Error();
    }

    return newProduct;
}