import React from 'react';

//components
import BlackArea from '../../components/BlackArea';
import ButtonBack from '../../components/ButtonBack';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Page from '../../components/Page';
import FormProduct from '../../components/FormProduct';

//hooks
import useApp from '../../hooks/useApp';

//consts
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default () => {
    const { 
        product, 
        productDispatch, 
        addLoader, 
        removeLoader 
    } = useApp();

    const finallySave = () => {
        setTimeout( () => removeLoader(), 2000);
        productDispatch({ type: 'RESET' });
    }

    const save = () => {
        productDispatch({ type: 'SAVE', payload: { onInit: addLoader, onFinally: finallySave } });
    };

    React.useEffect(() => {
        return () => { productDispatch({ type: 'RESET' }) }
    }, [productDispatch])

    return (
        <Page>
            <Navbar left={<ButtonBack />} />

            <BlackArea title="Cadastre um novo produto" style={{ flex: 1 }}>
                <ScrollView>
                    <FormProduct
                        product={product}
                        productDispatch={productDispatch} />
                </ScrollView>

                <View style={{ paddingTop: 8 }}>
                    <Button key={'button-0'} onPress={save} text="Salvar" />
                </View>
            </BlackArea>
        </Page>
    );
};
