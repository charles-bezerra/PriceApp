import { getRealm } from "../services/realm.service";
import { notFountKeyUtil } from "../util";

export default function productsReducer (products, action) {
    let newProducts = products;

    switch (action.type) {
        case 'ADD':
            newProducts.push(...action.payload.products);
            break;

        case 'SET':
            newProducts = action.payload.products;
            break;

        case 'RESET':
            newProducts = [];
            break;

        case 'LIST': 
            notFountKeyUtil(action.payload, "minIndex");
            notFountKeyUtil(action.payload, "maxIndex");
            notFountKeyUtil(action.payload, "onResponse");

            const minIndex=action.payload.minIndex;
            const maxIndex=action.payload.maxIndex;
            const onResponse=action.payload.onResponse;

            getRealm()
            .then((realm) => {
                let newproducts = realm
                                    .objects('Product')
                                    .sorted('created_at')
                                    .filter((_, index) => index >= minIndex  && index <= maxIndex);
            
                onResponse([...newproducts]);
            });
            break;

        case 'DELETE':
            break;

        default:
            throw new Error();       
    }

    return newProducts;
}