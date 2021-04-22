import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//StyleSheet
import styles from './styles';
import stylesGlobal from '../../assets/styles';

//Components
import BlackArea from '../BlackArea';
import ButtonNextProduct from '../ButtonNextProduct';
import Col from '../Col';
import Row from '../Row';

//util
import FormateDateUtil from '../../util/FormateDate';

//hooks
import {useNavigation} from '@react-navigation/native';
import useApp from '../../hooks/useApp';

export default ({product}) => {
  const {productDispatch} = useApp();
  const {navigate} = useNavigation();
  const formateDate = new FormateDateUtil();

  const onPressButton = () => {
    productDispatch({type: 'SET', payload: {product}});
    navigate('PRODUCT');
  };

  return (
    <BlackArea style={[styles.card, stylesGlobal.shadow]}>
      <Row style={{justifyContent: 'space-between'}}>
        <Col style={{flex: 1, paddingStart: 8}}>
          <Text style={styles.title}>{product?.title}</Text>

          <Row>
            <Col style={{paddingTop: 8, paddingEnd: 8}}>
              <Icon name="barcode" size={20} color="#000" />
            </Col>

            <Col style={{paddingTop: 8}}>
              <Text style={{fontSize: 12}}>{product?.barcode}</Text>
            </Col>
          </Row>

          <Text style={styles.date}>
            {formateDate.toUsualDate(product?.created_at)}
          </Text>
        </Col>

        <Col width={44} style={{height: '100%', justifyContent: 'center'}}>
          <ButtonNextProduct onPress={onPressButton} />
        </Col>
      </Row>
    </BlackArea>
  );
};
