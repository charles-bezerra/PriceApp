import React from 'react';
import { View, Text } from 'react-native';

//Components
import BlackArea from '../BlackArea';
import Col from '../Col';
import Row from '../Row';

//StyleSheets
import styles from "./styles";

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