import React from 'react';

//Components
import BlackArea from '../../components/BlackArea';
import ButtonBack from '../../components/ButtonBack';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Page from '../../components/Page';
import ListProducts from '../../components/ListProducts';

//hooks
import useApp from '../../hooks/useApp';

//controllers
import { listProduct } from '../../controllers/product.controller';

export default () => {
  const {products, productsDispatch} = useApp();

  const onList = React.useCallback( (minIndex, maxIndex) => {
    listProduct(minIndex, maxIndex)
      .then((response) => {
        productsDispatch({
          type: minIndex == 0 ? "RESET" : "ADD", 
          payload: {products: response} 
        });
      });
  }, [listProduct, productsDispatch]);

  React.useState(() => {
    onList(0, 9);
    return () => productsDispatch({type: 'RESET'})  
  }, [productsDispatch, onList]);

  return (
    <Page>
      <Navbar left={<ButtonBack />} right={<Button text="Filtrar" />} />

      <BlackArea title="Lista de produtos" style={{flex: 1}}>
        <ListProducts products={products} onList={onList} />
      </BlackArea>
    </Page>
  );
};
