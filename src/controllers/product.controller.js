import getRealm from '../services/realm.service';
import { verifyAllFieldsUtil } from '../util';

export async function listProduct(minIndex, maxIndex) {    
    const realm = await getRealm();
  
    try {
        let nproducts = realm
          .objects('Product')
          .sorted('created_at')
          .filter((_, index) => index >= minIndex && index <= maxIndex);

        const newproducts = nproducts.map( (product) => { 
            const productStringfy = JSON.stringify(product); 
            return JSON.parse(productStringfy);
        });

        return newproducts;
    }
    catch (error) {
        console.log('Falied on listed the products: ', error);
    }
    
}

export async function saveProduct(product) {
    const realm = await getRealm();

    try {
        const newDate = new Date();
    
        product.created_at = newDate.toDateString();
        product.updated_at = newDate.toDateString();
    
        if (verifyAllFieldsUtil(product)) {
    
            const results = realm
                .objects('Product')
                .filter((p) => p.barcode === product.barcode);
    
            if (results.length === 0) {
                realm.write(() => {
                    const newProduct = realm.create('Product', product);
                    return newProduct;  
                });

                return true;
            }
            else {
                return false;
            }
        }
    }
    catch (error) {
        console.log();
    } 

}

export async function counterProduct() {
    const realm = await getRealm();
    return realm.objects('Product').length;
}
  

export async function deleteProduct(product) {    
    const realm = await getRealm();
    const productObjectRealm = realm.objectForPrimaryKey("Product", product.barcode);

    if (productObjectRealm) {
        realm.write(() => {
            realm.delete(productObjectRealm);
        });
    }
}

export async function updateProduct(product) {
    const realm = await getRealm();

    let newProduct = product;
 
    realm.write(() => {
        newProduct = realm.create('Product', product);

        Object
            .keys(key => {
                newProduct[key] = product[key];
            });
    });

    return newProduct;
}