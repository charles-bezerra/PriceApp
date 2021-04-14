import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

import stylesGlobal from "../../assets/styles";

//Components
import BlackArea from '../BlackArea';
import ButtonNextProduct from '../ButtonNextProduct';
import Col from '../Col';
import Row from '../Row';

import Icon from "react-native-vector-icons/FontAwesome5";
import FormateDateUtil from '../../util/FormateDate';

import { useNavigation } from '@react-navigation/native';
import useApp from '../../hooks/useApp';

const stylesLocal = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'white',
        height: "auto",
        padding: 8,
        marginStart: 4,
        marginEnd: 4,
        marginBottom: 4,      
    },
    title: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
    },
    image: {
        borderRadius: 4,
        padding: 0,
        width: 60,
        height: 60,
    },
    date: {
        marginTop: 4,
        color: "#7C7C7C",
        fontWeight: '300',
        fontSize: 10,
    }
})

export default ({ product }) => {
    const { productDispatch } = useApp();
    const { navigate } = useNavigation();
    const formateDate = new FormateDateUtil();

    const onPressButton = () => {
        productDispatch({ type: 'SET', payload: { product } });
        navigate('PRODUCT');
    }

    return (
        <BlackArea style={[stylesLocal.card, stylesGlobal.shadow]}>
            <Row style={{ justifyContent: "space-between" }}>
                <Col style={{ flex: 1, paddingStart: 8 }}>
                    <Text style={stylesLocal.title}>
                        {product?.title}
                    </Text>

                    <Row>
                        <Col style={{ paddingTop: 8, paddingEnd: 8 }}>
                            <Icon name="barcode" size={20} color="#000"/>
                        </Col>

                        <Col style={{ paddingTop: 8}}>
                            <Text style={{ fontSize: 12 }}>{product?.barcode}</Text>
                        </Col>
                    </Row>

                    <Text style={stylesLocal.date}>{ formateDate.toUsualDate(product?.created_at) }</Text>
                </Col>
                
                <Col width={44} style={{ height: "100%", justifyContent: "center" }}>
                    <ButtonNextProduct onPress={onPressButton}/>
                </Col>
            </Row>
        </BlackArea>
    );
}