import Realm from 'realm';
import ProductSchema from '../schemas/Product';

export const getRealm = () => {
    return Realm.open({
        path: 'precoImpressoAppStorage',
        schema: [ProductSchema],
    });
};