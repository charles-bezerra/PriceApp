import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';

//components
import Button from '../../components/Button';

//Stylesheets
import styles from './styles';

//hooks
import useApp from '../../hooks/useApp';
import { useNavigation } from '@react-navigation/native';
import ButtonBack from '../../components/ButtonBack';

export default () => {
  let camera = null;
  const { productDispatch } = useApp();
  const { navigate } = useNavigation();

  const onBarcodeRead = (data) => {
    if (data.data && (data.type === 'EAN_13' || data.type === 'EAN_8')) {
      productDispatch({ type: 'CHANGE', payload: { fieldName: 'barcode', value: data.data } });
      navigate('SWITCH');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{height: 50, padding: 8}}>
        <ButtonBack />
      </View>
      <RNCamera
        ref={(ref) => {
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
        <Button text="Adicionar produto manualmentes" onPress={() => navigate('REGISTER')} />
      </View>
    </View>
  );
}