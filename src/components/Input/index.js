import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    inputWrapper: {
        marginTop: 8,
        marginBottom: 8,
    },
    input: {
      height: 40,
      borderWidth: 1,
      fontSize: 12,
      height: 'auto',
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderColor: "#C1C1C1",
      borderRadius: 4,
    },
    inputDisabled: {
        backgroundColor: "#FAF9F9",
    },
    label: {
        color: "#5C5C5C",
        fontSize: 10,
        //textTransform: "uppercase",
        fontWeight: "400",
        marginBottom: 4,    }
});


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