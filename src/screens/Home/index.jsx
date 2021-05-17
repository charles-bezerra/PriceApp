import React from 'react';
import { Text, View } from 'react-native';

//Components
import BlackArea from '../../components/BlackArea';
import Page from '../../components/Page';
import ButtonOption from '../../components/ButtonOption';
import SliderArea from '../../components/SliderArea';
import CounterArea from '../../components/CounterArea';
import Row from '../../components/Row';
import Col from '../../components/Col';
import ListProductSimple from '../../components/ListProductSimple';
import VSpacing from '../../components/VSpacing';

//Hooks
import { useNavigation } from '@react-navigation/native';
import useApp from '../../hooks/useApp';

//Controller
import { listProduct } from '../../controllers/product.controller';

//StyleSheets
import styles from './styles';

export default () => {
  const navigation = useNavigation();
  const {products, productsDispatch} = useApp();

  React.useEffect(() => {
    const interval = setInterval(() => {
      listProduct(0, 9)
        .then( (productsResponse) => {
          productsDispatch({
            type: 'SET', 
            payload: {products: [...productsResponse] }
          });
        });
    }, 2000);

    return () => clearInterval(interval);
  }, [productsDispatch, listProduct]);

  return (
    <Page>
        <VSpacing/>

        <VSpacing>
          <Row style={{justifyContent: 'space-between'}}>
              <Col width="50%" style={{paddingEnd: 4}}>
                <View style={styles.contentTitle}>
                  <Text style={styles.title}>Bem Vindo ao</Text>
                  <Text style={styles.subTitle}>Preço Impresso</Text>
                </View>
              </Col>

              <Col width="50%" style={{paddingStart: 4}}>
                <CounterArea title="Total de produtos"/>
              </Col>
          </Row>
        </VSpacing>

        <VSpacing style={{ flex: 1 }}>
          <BlackArea title="Últimos produtos adicionados" style={{flex: 1}}>
            <ListProductSimple products={products} />
          </BlackArea>
        </VSpacing>

        <SliderArea>
          <ButtonOption
            title="Escanear"
            iconName="barcode"
            onPress={() => navigation.navigate('CAM_SCAN')}
          />
          <ButtonOption
            title="Produtos"
            iconName="th"
            onPress={() => navigation.navigate('PRODUCTS')}
          />
          <ButtonOption
            title="Backup"
            iconName="undo"
          />
          <ButtonOption
            title="Ajuda"
            iconName="info-circle"
          />
        </SliderArea>
    </Page>
  );
};
