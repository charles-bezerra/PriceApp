import React from 'react';

//components
import ButtonBack from '../../components/ButtonBack';
import Page from '../../components/Page';
import Navbar from '../../components/Navbar';
import FormProduct from '../../components/FormProduct';
import BlackArea from '../../components/BlackArea';
import Button from '../../components/Button';

//hooks
import useApp from '../../hooks/useApp';

//reducers
import productReducer from '../../reducers/productReducer';


export default () => {
    const { product } = useApp();
    const [ productEdit, productDispatchEdit ] = React.useReducer(productReducer, product);

    return (
        <Page>
            <Navbar left={<ButtonBack/>} />

            <BlackArea>
                <FormProduct 
                    product={productEdit} 
                    productDispatch={productDispatchEdit}/>
                
                <Button text="Atualizar"/>
            </BlackArea>
        </Page>
    )
}