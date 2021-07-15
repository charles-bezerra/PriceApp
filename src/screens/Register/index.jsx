import React from 'react';
import { View, ScrollView, Alert } from 'react-native';

//components
import BlackArea from '../../components/BlackArea';
import ButtonBack from '../../components/ButtonBack';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Screen from '../../components/Screen';
import FormProduct from '../../components/FormProduct';

//hooks
import useApp from '../../hooks/useApp';

//controllers
import { saveProduct } from '../../controllers/product.controller';
import { verifyAllFieldsUtil } from '../../util';

export default () => {
  const {
    product,
    productDispatch,
    addLoader,
    removeLoader
  } = useApp();

  const save = () => {
    addLoader();
    saveProduct(product)
      .then((response) => {
        if (response) {
          Alert.alert("Produto salvo com sucesso!");
        }
        else {
          Alert.alert("Código de barras já cadastrado.");
        }
      })
      .catch(() => {
        Alert.alert("Falha ao salvar produto");
      })
      .finally(() => {
        setTimeout(() => removeLoader(), 2000);
        productDispatch({ type: 'RESET' });
      });
  };

  const onSave = () => {
    const test = verifyAllFieldsUtil(product, ["price", "description", "created_at", "updated_at"]);

    if (test) {
      save();
    }
    else {
      Alert.alert("Preencha todos o campos obrigatórios");
    }
  }

  React.useEffect(() => {
    return () => { productDispatch({ type: 'RESET' }) }
  }, [productDispatch])

  return (
    <Screen>
      <Navbar left={<ButtonBack />} />
      <BlackArea title="Cadastre um novo produto" style={{ flex: 1 }}>
        <ScrollView>
          <FormProduct
            product={product}
            productDispatch={productDispatch} />
        </ScrollView>
        <View style={{ paddingTop: 8 }}>
          <Button
            key={'button-0'}
            onPress={onSave}
            text="Salvar" />
        </View>
      </BlackArea>
    </Screen>
  );
};
