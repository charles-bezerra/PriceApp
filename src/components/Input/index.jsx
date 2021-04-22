import React from 'react';
import { Text, TextInput, View } from 'react-native';

//StyleSheets
import styles from './styles';

export default ({style, label, ...props}) => (
    <View style={styles.inputWrapper}>
        {label ? <Text style={styles.label}>{label}</Text> : <></> }

        <TextInput
            editable={props.editable ? true : false}
            style={[styles.input, style ? style : {}, (props.editable) ? {} : styles.inputDisabled]}
            {...props}
        />
    </View>
);