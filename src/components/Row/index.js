import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    row: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap"
    }
});

export default ({children, style}) => (
    <View style={[styles.row, style ? style : {}]}>
        {children}
    </View>
)