import React from 'react';
import {Text, FlatList} from 'react-native';

//Components
import BlackArea from '../../components/BlackArea';
import Card from '../../components/Card';
import Page from '../../components/Page';
import ButtonOption from '../../components/ButtonOption';
import SliderArea from '../../components/SliderArea';
import CounterArea from '../../components/CounterArea';
import Row from '../../components/Row';
import Col from '../../components/Col';
import ModePrintArea from '../../components/ModePrintArea';
import Navbar from '../../components/Navbar';

//Hooks
import {useNavigation} from '@react-navigation/native';
import useApp from '../../hooks/useApp';

//Controller
import { listProduct } from '../../controllers/product.controller';

const ContentListCardProduct = ({products}) => {
  let content = (<Text>Nenhum produto cadastrado.</Text>);
  
  if (products.length > 0) {
    content = (
      <FlatList
        data={products} 
        renderItem={({item}) => <Card product={item} /> }
        keyExtractor={(_, index) => `list-product-${index}`}
      />  
    ) 
  }

  return content;
};

export default () => {
  const navigation = useNavigation();
  const {products, productsDispatch} = useApp();

  React.useEffect(() => {
    listProduct(0, 9)
      .then( (productsResponse) => {
        productsDispatch({
          type: 'SET', 
          payload: {products: [...productsResponse] }
        });
      });
  }, [productsDispatch, listProduct]);

  return (
    <Page>
        <Navbar/>

        <Row style={{justifyContent: 'space-between'}}>
            <Col width="50%" style={{paddingEnd: 4}}>
              <CounterArea title="Total de produtos" />
            </Col>

            <Col width="50%" style={{paddingLeft: 4}}>
              <ModePrintArea i={1} j={24} />
            </Col>
        </Row>

        <BlackArea title="Últimos produtos adicionados" style={{flex: 1}}>
          <ContentListCardProduct products={products} />
        </BlackArea>

      <SliderArea>
        <ButtonOption
          title="Escanear"
          iconName="barcode"
          onPress={() => navigation.navigate('CAM_SCAN')}
        />
        <ButtonOption
          title="Ajustes"
          iconName="cog"
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
