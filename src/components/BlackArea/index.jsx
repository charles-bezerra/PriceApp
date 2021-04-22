import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

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