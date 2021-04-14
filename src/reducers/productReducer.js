import { Alert } from "react-native";
import { initialProduct } from "../constants";
import { saveProduct, updateProduct } from "../services/product.service";
import { notFountKeyUtil, verifyAllFieldsUtil } from "../util";

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

        case 'SAVE':
            notFountKeyUtil(action.payload, "onInit");
            notFountKeyUtil(action.payload, "onFinally");

            const newDate = new Date();

            product.created_at = newDate.toDateString();
            product.updated_at = newDate.toDateString();

            if (verifyAllFieldsUtil(product)) {
                console.log("entrou");
                action.payload.onInit();

                saveProduct(product)
                .then((saved) => {
                    if (saved) {
                        Alert.alert('Produto salvo com sucesso!');
                    } 
                    else {
                        Alert.alert('Produto já existe!');
                    }
                })
                .finally(() => {
                    action.payload.onFinally();
                });
            } else {
                Alert.alert('Preecha todos os campos corretamente!');
            }
            break;    
        
        case 'UPDATE':
            notFountKeyUtil(action.payload, "onInit");
            notFountKeyUtil(action.payload, "onFinally");

            action.payload.onInit();

            updateProduct(product)
                .catch( () => {
                    Alert.alert('Houve algum problema ao salvar esse produto.');
                })
                .finally( () => {
                    Alert.alert('Produto salvo com sucesso!');
                    action.payload.onFinally();
                });
                break;

        case 'DELETE': 
            break;

        default:
            throw new Error();
    }

    return newProduct;
}