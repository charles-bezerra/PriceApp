import React from "react";
import { FlatList, Text, View } from "react-native";

//Components
import Card from "../Card";
import Loading from "../Loading";

const ListProducts = ({ products, onScroll, isLoading }) => {
  const changeScroll = () => setTimeout(() => onScroll, 2000);

  return (
    <FlatList
      data={products}
      onScrollEndDrag={changeScroll}
      keyExtractor={(item, index) => `${item.barcode} - ${index}`}
      renderItem={({ item }) => <Card product={item} />}
      ListEmptyComponent={() => !isLoading ? <Text>Nenhum produto encontrado.</Text> : <></>}
      ListFooterComponent={() => isLoading ?
        (
          <View style={{ paddingVertical: 16 }}>{<Loading />}</View>
        ) : <></>
      }
    />
  );
};

export default ListProducts;