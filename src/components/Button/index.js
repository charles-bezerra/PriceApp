import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Col from '../Col';
import Row from '../Row';

import stylesGlobal from '../../assets/styles';

const styles = StyleSheet.create({
    button: {
        padding: 8,
        backgroundColor: "#010066",
        borderRadius: 6,
        width: "auto",
    },
    buttonSecondary: {
        backgroundColor: '#D24C0E',
    },
    text: {
        color: '#fff'
    },
    rowButton: {
        width: "auto",
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default ({ text, iconName, onPress, style, secondary }) => (
    <TouchableHighlight
        activeOpacity={1}
        underlayColor="#EA550F"
        delayPressOut={150}
        onPress={onPress}
        style={[styles.button, stylesGlobal.shadow, style ? style : {}, secondary ? styles.buttonSecondary : {} ]}>
            <Row style={styles.rowButton}>
                <Col>
                    { iconName ? <Icon name={iconName} size={20} color="#fff"/> : <></> }
                </Col>

                <Col style={(text && iconName) ? {marginStart: 4} : {}}>
                    <Text style={styles.text}>
                        { text }
                    </Text>
                </Col>
            </Row>
    </TouchableHighlight>
)