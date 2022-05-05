import React from 'react';
import RNPrint from 'react-native-print';
import {Alert, ScrollView, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/core';

//Components
import BlackArea from '../../components/BlackArea';
import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import Navbar from '../../components/Navbar';
import Screen from '../../components/Screen';
import ModalInfo from '../../components/ModalInfo';
import Input from '../../components/Input';
import VSpacing from '../../components/VSpacing';
import Group from '../../components/Group';

//Hooks
import useApp from '../../hooks/useApp';
import useFormater from '../../hooks/useFormater';

//Controller
import { deleteProduct } from '../../controllers/product.controller';
import { getLogo } from '../../controllers/logo.controller';

//Utils
import FormateDateUtil from '../../util/FormateDate';
import GenerateProductsHTML from '../../util/GenerateProductsHTML';

//Types
import { ProductActionTypes } from '../../store/types';

//styles
import styles from './styles';

//Constants
import { defaultID } from '../../constants';

const BSpacing = ({children}) => (
  <View style={{paddingBottom: 8}}>{children}</View>
);

export default () => {
  const formateDate = new FormateDateUtil();

  const [visible, setVisible] = React.useState(false);
  const { navigate, goBack } = useNavigation();
  const { priceFormater, intFormater } = useFormater();

  const {
    product,
    productDispatch,
    products,
    productsDispatch,
    addLoader,
    removeLoader,
  } = useApp();

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

  const onDelete = () => {
    productsDispatch({
        type: 'SET', 
        payload: { 
            products: products.filter( 
                productArg => productArg.barcode !== product.barcode 
            ) 
        }
    });
    
    addLoader();

    deleteProduct(product)
      .then( () => {
        goBack();
      })
      .finally( () => {
        removeLoader();
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

    if (logo === null) {
      Alert.alert("Logo não encontrada, por favor faça upload de uma logo na tela inicial.");
      return;
    }

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

  React.useEffect( () => {
    return () => productDispatch({type: ProductActionTypes.RESET})
  }, [productDispatch])

  return (
    <Screen>
      <Navbar left={<ButtonBack />} />
      <BlackArea title="Informações do produto" style={{flex: 1}}>
        <BlackArea style={{borderWidth: 1, borderColor: '#E1E1E1', flex: 1}}>
          <ScrollView>
            <Group label="Nome" text={product?.title} />
            <Group label="Código de barras" text={product?.barcode} />
            <Group label="Descrição" text={product?.description} />
            <Group label="Categoria" text={product?.category} />
            <Group label="Preço" isPrice text={product?.price} />
            <Group
              label="Criação"
              text={formateDate.toUsualDate(product?.created_at)}
            />
            <Group
              label="Última atualização"
              text={formateDate.toUsualDate(product?.updated_at)}
            />
          </ScrollView>
        </BlackArea>
        <BSpacing>
        </BSpacing>
        <BSpacing>
          <Button
            iconName="create"
            onPress={() => navigate('PRODUCT_EDIT')}
            text="Editar produto"
          />
        </BSpacing>
        <BSpacing>
          <Button
            iconName="delete"
            secondary
            onPress={onDelete}
            text="Excluir produto"
          />
        </BSpacing>
        <BSpacing>
          <Button iconName="print" onPress={ () => setVisible(true) } text="Imprimir este produto" />
        </BSpacing>
      </BlackArea>

      <ModalInfo 
        visible={visible}
        setVisible={setVisible}>
        <View>
          <Text style={styles.titleModal}>{ product.title || "Sem título" }</Text>
          <Text style={styles.subtitleModal}>Imprimir produto?</Text>
          <VSpacing/>
          <Input
            editable
            label="Quantidade" 
            keyboardType="numeric" 
            value={options.amount}
            onChangeText={(text) => onChange("amount", text)} /> 
          <Input
            editable
            label="Preço a ser impresso"
            keyboardType="numeric"
            value={options.price}
            onChangeText={(text) => onChange("price", text)} />
          <Button onPress={ onPrinter } text="Imprimir"/>
        </View>
      </ModalInfo>
    </Screen>
  );
};
