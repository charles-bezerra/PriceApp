import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 8,
    marginBottom: 8,
  },
  inputContent: {
    borderWidth: 1,
    borderColor: '#C1C1C1',
    borderRadius: 4,
    paddingVertical: 0,
  },
  input: {
    height: 40,
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 4,
  },
  inputDisabled: {
    backgroundColor: '#FAF9F9',
  },
  label: {
    color: '#5C5C5C',
    fontSize: 10,
//    textTransform: 'uppercase',
    fontWeight: '400',
    marginBottom: 4,
  },
});

export default ({label, style, items, ...props}) => (
  <View style={styles.inputWrapper}>
    {label ? <Text style={styles.label}>{label}</Text> : <></>}
    <View style={styles.inputContent}>
      <Picker
        enabled={props.editable ? true : false}
        
        style={[
          styles.input,
          style ? style : {},
          props.editable ? {} : styles.inputDisabled,
        ]}
        
        {...props}>

        {items.map((item, index) => (
          <Picker.Item
            label={item.label}
            value={item.value}
            key={index.toString() + '-item-select'}
          />
        ))}
        
      </Picker>
    </View>
  </View>
);
