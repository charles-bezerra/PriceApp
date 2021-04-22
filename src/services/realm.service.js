import Realm from 'realm';
import ProductSchema from '../schemas/Product';

const getRealm = async () => Realm.open({
    path: 'precoImpressoAppStorage',
    schema: [ProductSchema],
});

export default getRealm;