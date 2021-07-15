import React from 'react';
import {View, Text} from 'react-native';

import Screen from '../../components/Screen';

import {useNavigation} from '@react-navigation/core';
import useApp from '../../hooks/useApp';
import {getRealm} from '../../services/realm.service';
import ModalInfo from '../../components/ModalInfo';
import Row from '../../components/Row';
import Button from '../../components/Button';
import Col from '../../components/Col';

export default () => {
  const {product, productDispatch, addLoader, removeLoader} = useApp();
  const {navigate, goBack} = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const back = () => {
    setVisible(false);
    goBack();
  };

  const register = () => {
    setVisible(false);
    goBack();
    navigate('REGISTER');
  };

  const goProduct = () => {
    goBack();
    goBack();
    navigate('PRODUCT');
  };

  const effect = React.useCallback(() => {
    if (product) {
      addLoader();

      getRealm()
        .then((realm) => {
          const newproduct = realm.objectForPrimaryKey(
            'Product',
            product.barcode,
          );

          if (newproduct) {
            productDispatch({type: 'SET', payload: {product: newproduct}});
            goProduct();
          } else {
            setVisible(true);
          }
        })
        .finally(() => {
          setTimeout(() => {
            removeLoader();
          }, 1000);
        });
    } else {
      goBack();
    }
  }, [product, getRealm, addLoader, removeLoader, goBack]);

  React.useEffect(() => {
    effect();
  }, []);

  return (
    <Screen>
      <ModalInfo visible={visible} setVisible={setVisible}>
        <View>
          <Text style={{fontSize: 22, fontWeight: '500', marginBottom: 8}}>
            Produto não encontrado
          </Text>
          <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 40}}>
            Deseja criar um novo?
          </Text>
          <Row>
            <Col width="50%" style={{justifyContent: 'center', paddingEnd: 8}}>
              <Button text="Sim" onPress={register} />
            </Col>

            <Col
              width="50%"
              style={{justifyContent: 'center', paddingStart: 8}}>
              <Button text="Não" secondary onPress={back} />
            </Col>
          </Row>
        </View>
      </ModalInfo>
    </Screen>
  );
};
