import React from 'react';
import { View, ScrollView } from 'react-native';
import Row from '../../components/Row';
import styles from "../../assets/styles"

export default ({children, style}) => (
    <View style={style ? style : style}>
        <ScrollView horizontal style={styles.scrollviewX}>
            <Row>
                { children }
            </Row>
        </ScrollView>
    </View>
)