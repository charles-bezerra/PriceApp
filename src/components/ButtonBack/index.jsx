import React from 'react';
import {TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default () => {
  const { goBack } = useNavigation();

  return (
    <TouchableHighlight
      underlayColor="rgba(255,255,255,0.1)"
      delayPressIn={150}
      delayPressOut={150}
      onPress={() => goBack()}>
        <Icon name="arrow-back" size={30} color="#fff" />
    </TouchableHighlight>
  );
};
