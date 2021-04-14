import { getRealm } from './realm.service';

export const saveProduct = async (product) => {
    let result = false;
    const realm = await getRealm();

    const results = realm
                        .objects('Product')
                        .filter((p) => p.barcode === product.barcode);
    
                        
    if (results.length === 0) {
        realm.write(() => {
            const newProduct = realm.create('Product', product);
            return newProduct;  
        })

        result = true;
    }
                        
    return result;
}  

export const deleteProduct = async (product) => {    
    const realm = await getRealm();

    realm.write(() => {
        realm.delete(product);
        product=null;
    });
}

export const updateProduct = async (product) => {
    let newProduct = product;
    const realm = await getRealm();

    realm.write(() => {
        newProduct = realm.create('Product', product);

        Object
            .keys(key => {
                newProduct[key] = product[key];
            })
    })

    return newProduct;
}