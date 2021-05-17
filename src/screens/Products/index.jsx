import React from 'react';

//Components
import BlackArea from '../../components/BlackArea';
import ButtonBack from '../../components/ButtonBack';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Page from '../../components/Page';
import ListProducts from '../../components/ListProducts';

import useProductsPagination from "../../hooks/useProductsPagination";

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [products, onScroll] = useProductsPagination();

  React.useEffect(() => {
    let timeout;
    setIsLoading(true);

    onScroll()
    .finally( () => {
      timeout = setTimeout( () => {
        setIsLoading(false);
      }, 2000);  
    });
  
    return () => clearTimeout(timeout)
  }, []);
  
  return (
    <Page>
      <Navbar left={<ButtonBack />} right={<Button text="Filtrar" />} />

      <BlackArea title="Lista de produtos" style={{flex: 1}}>
        <ListProducts 
          products={products} 
          onList={onScroll}
          isLoading={isLoading} />
      </BlackArea>
    </Page>
  );
};
