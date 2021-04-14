import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Col from '../Col';

const styles = StyleSheet.create({
    button: {
        width: 86,
        height: 96,
        padding: 8,
        borderRadius: 6,
        marginEnd: 8,
        backgroundColor: "#D24C0E"
    },
    contentTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center"
    },
    title: {
        fontSize: 10,
        fontWeight: "400",
        textTransform: "uppercase",
        color: "#fff",
    }
})

export default ({ onPress, iconName, title }) => {
    return (
        <TouchableHighlight 
            underlayColor={"#EA550F"}
            delayPressIn={150}
            delayPressOut={150}
            onPress={onPress}
            style={[styles.button]}>

            <Col style={{flex: 1, justifyContent: "space-between"}}>
                <Icon name={iconName} size={20} color="#fff"/>

                <View style={styles.contentTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Col>
        </TouchableHighlight>
    )
}