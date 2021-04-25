import React from 'react';
import { Text, FlatList } from 'react-native'
import Card from '../Card';

const ListProductSimple = ({products}) => {
    let content = (<Text>Nenhum produto cadastrado.</Text>);
    
    if (products.length > 0) {
      content = (
        <FlatList
          data={products} 
          renderItem={({item}) => <Card product={item} /> }
          keyExtractor={(_, index) => `list-product-${index}`}
        />  
      ) 
    }
  
    return content;
};

export default ListProductSimple;