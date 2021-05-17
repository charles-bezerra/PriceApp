import { initialProduct } from "../../constants";
import { notFountKeyUtil } from "../../util";

let productObserver= {};

productObserver.CHANGE = (product, action) => {
    notFountKeyUtil(action.payload, "fieldName");
    notFountKeyUtil(action.payload, "value");

    return { 
        ...product,
        [action.payload.fieldName]: action.payload.value
    }
}

productObserver.SET = (_, action) => {
    notFountKeyUtil(action.payload, "product");
    return action.payload.product;
}

productObserver.RESET = () => initialProduct;

export default productObserver;