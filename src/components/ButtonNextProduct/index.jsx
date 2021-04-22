import React from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//StyleSheets
import styles from './styles';
import stylesGlobal from "../../assets/styles";

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