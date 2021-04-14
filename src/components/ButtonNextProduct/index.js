import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import stylesGlobal from "../../assets/styles";

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#D24C0E",
    }
});

export default ({ onPress, style }) => {
    return (
        <TouchableHighlight 
            activeOpacity={1}
            underlayColor={"#010066"}
            delayPressOut={150}
            onPress={onPress} 
            style={[styles.button, stylesGlobal.shadow, style ? style : {}]}>
                <Icon name="chevron-right" size={16} color="#fff"/>
        </TouchableHighlight>
    )
}