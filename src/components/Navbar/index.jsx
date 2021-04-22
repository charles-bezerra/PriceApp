import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Col from '../Col';
import Row from '../Row';

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    alignContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  left: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default ({left, center, right}) => (
  <SafeAreaView>
    <Row style={styles.navbar}>
      <Col style={{flex: 1}}>
        <Row style={styles.left}>{left}</Row>
      </Col>
      <Col style={{flex: 1}}>
        <Row style={styles.center}>{center}</Row>
      </Col>
      <Col style={{flex: 1}}>
        <Row style={styles.right}>{right}</Row>
      </Col>
    </Row>
  </SafeAreaView>
);
