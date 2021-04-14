import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    col: {
        flexDirection: "column",
        margin: 0,
        padding: 0,
        width: "auto",
        height: "auto"
    }
});


export default ({children, width, style}) => (
    <View style={[styles.col, style ? style : {}, width ? {width: width} : {}]}>
        {children}
    </View>
)