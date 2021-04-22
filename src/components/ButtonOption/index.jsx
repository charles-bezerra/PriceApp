import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Col from '../Col';

import styles from './styles';

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