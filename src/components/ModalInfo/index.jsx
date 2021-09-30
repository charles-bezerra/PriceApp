import React from 'react';
import {
  Modal,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Row from '../Row';

import styles from './styles';

const ButtonClose = ({onPress}) => (
  <TouchableHighlight
    underlayColor="rgba(255,255,255,0.1)"
    delayPressIn={150}
    delayPressOut={150}
    onPress={onPress}>
    <Icon name="close" size={30} color="#000" />
  </TouchableHighlight>
);

export default ({children, visible, setVisible, onRequestClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.content}>
        <Row style={styles.closeRow}>
          <ButtonClose onPress={() => setVisible(false)} />
        </Row>

        <ScrollView>{children}</ScrollView>
      </View>
    </Modal>
  );
};
