import Realm from 'realm';

import LogoSchema from '../schemas/Logo';
import ProductSchema from '../schemas/Product';

export const getRealm = async () => {
  return Realm.open({
    path: 'precoImpressoAppStorage',
    schema: [ProductSchema, LogoSchema],
  });
};
