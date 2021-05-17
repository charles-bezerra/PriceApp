import React from 'react';
import { Alert } from 'react-native';

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
import productReducer from '../../store/reducers/productReducer';
import { updateProduct } from '../../controllers/product.controller';


export default () => {
    const { product, productDispatch, addLoader, removeLoader } = useApp();
    const [ productEdit, productDispatchEdit ] = React.useReducer(productReducer, product);

    const onUpdate = () => {
        addLoader();

        updateProduct(productEdit)
            .then( (updated) => {
                if (updated) {
                    productDispatch({ type: 'SET', payload: { product: productEdit } })
                    Alert.alert("Produto atualizado com sucesso!");
                }
                else {
                    Alert.alert("O produto não pode ser atualizado.");
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                removeLoader();
            }); 
    };

    return (
        <Page>
            <Navbar left={<ButtonBack/>} />

            <BlackArea>
                <FormProduct 
                    product={productEdit} 
                    productDispatch={productDispatchEdit}/>
                
                <Button text="Atualizar" onPress={onUpdate}/>
            </BlackArea>
        </Page>
    )
}