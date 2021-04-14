import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BlackArea from '../BlackArea';
import Col from '../Col';
import Row from '../Row';

const styles = StyleSheet.create({
    contentXY: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#F1F0F0",
        borderRadius: 6,
        paddingTop: 8,
        paddingBottom: 16
    },
    contentVS: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 6,
        paddingTop: 8,
        paddingBottom: 16
    },
    text: {
        fontSize: 20
    }
});

export default ({ i, j }) => {
    return ( 
        <BlackArea title="Modo de impressão">
            <Row>
                <Col width="40%">
                    <View style={[styles.contentXY]}>
                        <Text style={styles.text}>{i}</Text>
                    </View>
                </Col>
                
                <Col width="20%">
                    <View style={styles.contentVS}>
                        <Text style={[styles.text, {color: "#A1A1A0"}]}>X</Text>
                    </View>
                </Col>

                <Col width="40%">
                    <View style={[styles.contentXY]}>
                        <Text style={styles.text}>{j}</Text>
                    </View>
                </Col>
            </Row>
        </BlackArea>
    )
}