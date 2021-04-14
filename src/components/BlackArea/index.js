import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: "#FAFAFA",
        borderRadius: 6,
    },
    title: {
        color: "#5C5C5C",
        fontSize: 10,
        textTransform: "uppercase",
        fontWeight: "400",
        marginBottom: 8,
    }
});

export default ({ children, style, title }) => {
    return (
        <View style={[styles.card, style ? style : {}]}>
            {
                (title) ? <Text style={styles.title}>{title}</Text> : <></>
            }
    
            {children}
        </View>
    )
}