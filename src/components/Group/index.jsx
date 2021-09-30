import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Group = ({label, text, isPrice}) => (
  <>
    {text ? (
      <View style={styles.group}>
        <Text style={styles.labelGroup}>{label}</Text>
        <Text style={[styles.textGroup, isPrice ? styles.textPrice : {}]}>
          {isPrice ? 'R$ ' : ''}
          {text}
        </Text>
      </View>
    ) : (
      <></>
    )}
  </>
);

export default Group;
