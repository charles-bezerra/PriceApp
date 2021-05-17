import productObserver from "../observers/productObserver";

export default function productReducer(product, action) {
    const behavior = productObserver[action.type];
    return behavior(product, action);
}