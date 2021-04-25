import getRealm from "../services/realm.service";

export async function listProduct(minIndex, maxIndex) {
    const realm = await getRealm();

    try {
        let nproducts = realm
            .objects("Product")
            .sorted("title")
            .filter((_, index) => index >= minIndex && index <= maxIndex);

        const newproducts = nproducts.map((product) => {
            const productStringfy = JSON.stringify(product);
            return JSON.parse(productStringfy);
        });

        return newproducts;
    } catch (error) {
        console.log("Falied on listed the products: ", error);
    }
}


export async function saveProduct(product) {
    const realm = await getRealm();

    try {
        const newDate = new Date();
        product.created_at = newDate.toDateString();
        product.updated_at = newDate.toDateString();

        const result = realm.objectForPrimaryKey("Product", product.barcode);

        if (!result) {
            realm.write(() => {
                const newProduct = realm.create("Product", product);
                return newProduct;
            });
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}


export async function counterProduct() {
    const realm = await getRealm();
    return realm.objects("Product").length;
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


export async function updateProduct(newProduct) {
    const realm = await getRealm();

    try {
        realm.write(() => {
            const product = realm.objectForPrimaryKey("Product", newProduct.barcode);

            Object.keys(newProduct).forEach((key) => {
                if (key !== "barcode" && product[key] !== newProduct[key]) {
                    product[key] = newProduct[key];
                }
            });
        });

        return true;
    } catch (error) {
        console.error(error);
        return error;
    }
}
