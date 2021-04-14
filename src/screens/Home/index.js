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
import ContentLoading from '../../components/ContentLoading';
import Navbar from '../../components/Navbar';

//Hooks
import {useNavigation} from '@react-navigation/native';
import useApp from '../../hooks/useApp';

//Reducers

const ContentListCardProduct = ({products}) => (
  <FlatList
    data={products}
    renderItem={({item}) => <Card product={item} />}
    keyExtractor={(_, index) => `list-product-${index}`}
  />
);

export default () => {
  const navigation = useNavigation();
  const {products, productsDispatch} = useApp();
  const [content, setContent] = React.useState(<ContentLoading />);

  const getProducts = React.useCallback( () => {
    const onResponse = (response) => productsDispatch({ type: 'SET', payload: { products: response } });
    const payload = { minIndex: 0, maxIndex: 9, onResponse };

    productsDispatch({ type: 'LIST', payload });
  }, [productsDispatch])

  React.useEffect( () => {
    getProducts();
  }, [getProducts]);


  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (products.length > 0) {
        setContent(<ContentListCardProduct products={products} />);
      } else {
        setContent(<Text>Nenhum produto cadastrado.</Text>);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [products]);

  return (
    <Page>
        <Navbar/>

        <Row style={{justifyContent: 'space-between'}}>
            <Col width="50%" style={{paddingEnd: 4}}>
            <CounterArea title="Total de produtos" counter={products.length} />
            </Col>

            <Col width="50%" style={{paddingLeft: 4}}>
            <ModePrintArea i={1} j={24} />
            </Col>
        </Row>

        <BlackArea title="Últimos produtos adicionados" style={{flex: 1}}>
            {content}
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
