import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getRealm } from '../../services/realm.service';
import BlackArea from '../BlackArea';

const styles = StyleSheet.create({
    counterAreaContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#F1F0F0",
        borderRadius: 6,
        paddingTop: 8,
        paddingBottom: 16
    },
    counterAreaNumber: {
        fontSize: 20,
        fontWeight: "400"
    }
})

export default ({ title }) => {
    const [counter, setCounter] = React.useState(0);

    React.useEffect( () => {
        getRealm()
        .then( (realm) => {
            const products = realm.objects('Product').length;

            if (products>0) {
                setCounter(products);
            }
        })
    }, []);

    return (
        <BlackArea title={title}>
            <View style={[styles.counterAreaContent]}>
                <Text style={styles.counterAreaNumber}>{counter}</Text>
            </View>       
        </BlackArea>
    )
}