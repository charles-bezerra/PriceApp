import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

//components
import Button from '../../components/Button';

//hooks
import useApp from '../../hooks/useApp';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',    
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 16,
        paddingHorizontal: 16,
        width: '100%'
    }
});

export default () => {
    let camera = null;
    const { productDispatch } = useApp();
    const { navigate } = useNavigation();

    const onBarcodeRead = (data) => {        
        if( data.data && (data.type === 'EAN_13' || data.type === 'EAN_8' )  ) {
            productDispatch({type: 'CHANGE', payload: { fieldName: 'barcode', value: data.data }});
            navigate('SWITCH');
        }
    }

    return (
        <View style={styles.container}>
            <RNCamera
                ref={ (ref) => {
                    camera = ref;
                }}
                style={styles.camera}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                onBarCodeRead={onBarcodeRead}
                androidCameraPermissionOptions={{
                  title: 'Permissão para usar sua câmera',
                  message: 'Precisamos da sua permissão para usar sua câmera',
                  buttonPositive: 'Aceitar',
                  buttonNegative: 'Cancelar',
                }}
            />

            <View style={styles.buttonContainer}>
                <Button text="Adicionar produto manualmentes" onPress={() => navigate('REGISTER')}/>
            </View>
        </View>
    );
}