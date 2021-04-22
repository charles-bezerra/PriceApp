import React from "react";
import { FlatList, Text, View } from "react-native";
import Card from "../Card";
import Loading from "../Loading";

const ListProducts = ({ products, onList }) => {
    const [pagination, setPagination] = React.useState({
        minIndex: 0,
        maxIndex: 9,
    });

    const onScroll = () => {
        setTimeout(() => {
            onList(pagination.minIndex + 10, pagination.maxIndex + 10);

            setPagination({
                minIndex: pagination.minIndex + 10,
                maxIndex: pagination.maxIndex + 10,
            });
        }, 2000);
    };

    return (
        <>
            <FlatList
                data={products}
                onScrollEndDrag={onScroll}
                keyExtractor={(item, index) => `${item.barcode} - ${index}`}
                renderItem={({ item }) => <Card product={item} />}
                ListEmptyComponent={() => <Text>Nenhum produto encontrado.</Text>}
                ListFooterComponent={() => (
                    <View style={{ paddingVertical: 8 }}>{<Loading />}</View>
                )}
            />
        </>
    );
};

export default ListProducts;