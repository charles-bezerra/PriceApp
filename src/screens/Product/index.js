import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import BlackArea from '../../components/BlackArea';
import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import Navbar from '../../components/Navbar';

import Page from '../../components/Page';
import useApp from '../../hooks/useApp';
import { deleteProduct } from '../../services/product.service';
import FormateDateUtil from '../../util/FormateDate';


const styles = StyleSheet.create({
    title: {
        fontSize: 22,
    },
    group: {
        marginVertical: 8,
    },
    labelGroup: {
        color: "#5C5C5C",
        fontSize: 10,
        fontWeight: '500',
        marginBottom: 4
    },
    textGroup: {
        color: "black",
        fontSize: 16,
        fontWeight: '500',
    },
    textPrice: {
        color: 'green',
        fontWeight: 'bold',
    }
});

const Group = ({ label, text, isPrice }) => (
    <View style={styles.group}>
        <Text style={styles.labelGroup}>{label}</Text>
        <Text style={[styles.textGroup, , (isPrice) ? styles.textPrice : {}]}>{text}</Text>
    </View>
);

const BSpacing = ({children}) => (
    <View style={{ paddingBottom: 8 }}>
        {children}
    </View>
)

export default () => {
    const { navigate } = useNavigation();
    const { product, productDispatch, productsDispatch, addLoader, removeLoader } = useApp();
    const formateDate = new FormateDateUtil();

    const onDelete = () => {        
        productsDispatch({ type: 'RESET' });

        addLoader();
        deleteProduct(product)
            .then( () => {
                goBack();   
            })
            .catch((error) => {
                console.log(error)
                Alert.alert("Problemas ao excluir esse produto!");
            })
            .finally( () => {
                setTimeout( () => {
                    removeLoader();
                }, 1000);
            });
    }

    React.useEffect( () => {        
        return () => {
            productDispatch({type: 'RESET'});
        } 
    }, [productDispatch]);

    return (
        <Page>
            <Navbar left={<ButtonBack/>}/>

            <BlackArea title="Informações do produto" style={{ flex: 1 }}>
                <BlackArea style={{ borderWidth: 1, borderColor: "#E1E1E1", flex: 1 }}>
                    <ScrollView>
                        <Group label="Nome" text={product?.title}/>
                        <Group label="Código de barras" text={product?.barcode}/>
                        <Group label="Descrição" text={product?.description}/>
                        <Group label="Categoria" text={product?.category}/>
                        <Group label="Preço" isPrice text={`R$ ${product?.price}`}/>
                        <Group label="Criação" text={formateDate.toUsualDate(product?.created_at)}/>
                        <Group label="Última atualização" text={formateDate.toUsualDate(product?.updated_at)}/>
                    </ScrollView>
                </BlackArea>

                <BSpacing>
                </BSpacing>

                <BSpacing>
                    <Button iconName="create" onPress={() => navigate('PRODUCT_EDIT')} text="Editar produto"/>
                </BSpacing>

                <BSpacing>
                    <Button iconName="delete" secondary text="Excluir projeto"/>
                </BSpacing>

                <BSpacing>
                    <Button iconName="print" text="Imprimir este produto"/>
                </BSpacing>
            </BlackArea>
        </Page>
    );
};