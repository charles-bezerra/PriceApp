import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Col from '../Col';
import Row from '../Row';

//StyleSheets
import styles from "./styles";
import stylesGlobal from '../../assets/styles';


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