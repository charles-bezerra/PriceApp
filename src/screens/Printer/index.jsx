import React from 'react';
import {Text, View, Alert} from 'react-native';
import { RNPrint } from 'react-native-camera';

import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import ModalInfo from '../../components/ModalInfo';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Screen from '../../components/Screen';
import VSpacing from '../../components/VSpacing';

import { getLogo } from '../../controllers/logo.controller';

import useApp from '../../hooks/useApp';
import useFormater from '../../hooks/useFormater';

import GenerateProductsHTML from '../../util/GenerateProductsHTML';

export default () => {
  const { intFormater } = useFormater();
  const { product } = useApp();

  const [options, setOptions] = React.useState({
    amount: "0",
    price: product.price,
  });

  const onChange = (name, value) => {
    if (name === 'price') 
      value = priceFormater(value);
    else if (name === 'amount')
      value = intFormater(value);

    setOptions({
      ...options,
      [name]: value
    });
  };

  const onPrinter = () => {
    if (parseInt(intFormater(options.amount)) > 0 && parseInt(intFormater(options.price)) > 0) {
      printHTML();
    }
    else {
      Alert.alert("Preencha todas as informções!");
    }
  }

  const printHTML = async () => {
    const logo = await getLogo(defaultID);

    await RNPrint.print({
      isLandscape: true,
      html: GenerateProductsHTML({ 
        product: product, 
        amount: parseInt(options.amount), 
        price: options.price, 
        logoURI: logo.uri 
      })
    });
  }
  
  return (
    <Screen>
      <Navbar left={<ButtonBack />} />
      <ModalInfo visible={visible} setVisible={setVisible}>
        <View>
          <Text style={styles.titleModal}>{product.title || 'Sem título'}</Text>
          <Text style={styles.subtitleModal}>Imprimir produto?</Text>
          <VSpacing />
          <Input
            editable
            label="Quantidade"
            keyboardType="numeric"
            value={options.amount}
            onChangeText={(text) => onChange('amount', text)}
          />
          <Input
            editable
            label="Preço a ser impresso"
            keyboardType="numeric"
            value={options.price}
            onChangeText={(text) => onChange('price', text)}
          />
          <Button onPress={onPrinter} text="Imprimir" />
        </View>
      </ModalInfo>
    </Screen>
  );
};
