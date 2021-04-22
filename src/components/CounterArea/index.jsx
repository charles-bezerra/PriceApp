import React from 'react';
import { View, Text } from 'react-native';

//components
import BlackArea from '../BlackArea';

//StyleSheets
import styles from './styles';

//Controller
import { counterProduct } from '../../controllers/product.controller';

export default ({ title }) => {
    const [counter, setCounter] = React.useState(0);

    React.useEffect( () => {
        const interval = setInterval( () => {
            counterProduct()
            .then( counter => {
                setCounter(counter);
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [setCounter, counterProduct]);

    return (
        <BlackArea title={title}>
            <View style={[styles.counterAreaContent]}>
                <Text style={styles.counterAreaNumber}>{counter}</Text>
            </View>       
        </BlackArea>
    )
}