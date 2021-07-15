import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import RNPrint from 'react-native-print';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {useNavigation} from '@react-navigation/core';

//Components
import BlackArea from '../../components/BlackArea';
import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import Navbar from '../../components/Navbar';
import Screen from '../../components/Screen';

//Hooks
import useApp from '../../hooks/useApp';

//Controller
import {deleteProduct} from '../../controllers/product.controller';
import {getLogo} from '../../controllers/logo.controller';

//Utils
import FormateDateUtil from '../../util/FormateDate';
import { ProductActionTypes } from '../../store/types';
import GenerateProductsHTML from '../../util/GenerateProductsHTML';

//styles
import styles from './styles'
import { defaultID } from '../../constants';

const Group = ({label, text, isPrice}) => (
  <>
    {
      text ? (
        <View style={styles.group}>
          <Text style={styles.labelGroup}>{label}</Text>
          <Text style={[styles.textGroup, isPrice ? styles.textPrice : {}]}>
            {isPrice ? 'R$ ' : ''}{text}
          </Text>
        </View>
      ) : (
        <></>
      )
    }
  </>
);

const BSpacing = ({children}) => (
  <View style={{paddingBottom: 8}}>{children}</View>
);

export default () => {
  const formateDate = new FormateDateUtil();
  const { navigate, goBack } = useNavigation();
  const {
    product,
    productDispatch,

    products,
    productsDispatch,
    
    addLoader,
    removeLoader,
  } = useApp();

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

  const printHTML = async () => {
    const logo = await getLogo(defaultID);

    await RNPrint.print({
      isLandscape: true,
      html: GenerateProductsHTML({ product: product, amount: 36, price: '16.00', logoURI: logo.uri })
    });
  }

  const printPDF = async () => {
    const logo = await getLogo(defaultID);

    const g = GenerateProductsHTML({ product: product, amount: 36, price: '16.00', logoURI: logo.uri });  

    const results = await RNHTMLtoPDF.convert({
      html: GenerateProductsHTML({ product: product, amount: 36, price: '16.00', logoURI: logo.uri }),
      fileName: 'test',
      base64: true,
    })

    await RNPrint.print({ filePath: results.filePath });
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

        <BSpacing></BSpacing>

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
          <Button iconName="print" onPress={ printHTML } text="Imprimir este produto" />
        </BSpacing>
      </BlackArea>
    </Screen>
  );
};
