import React from 'react';
import { Alert } from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';
import { saveCurrentLogo } from '../../controllers/logo.controller';

import Button from '../Button';

const options = {
  mediaType: 'photo',
  selectionLimit: 1,
};

const ImagePicker = ({ text, onDone }) => {
  const onResponse = (response) => {
    if (!response.didCancel) {
      const { 
        fileName: file_name,
        fileSize: file_size,
        height,
        width,
        type,
        uri
      } = response;
  
      saveCurrentLogo({
        id: '',
        file_name,
        file_size,
        height,
        width,
        type,
        uri
      })
      .then( (saved) => {
        if(saved) {
          onDone();
          Alert.alert('Logo salva com sucesso!');
        }
        else {
          Alert.alert('Error ao salvar logo');
        }
      });
    }
  }

  const onGet = () => launchImageLibrary(options, onResponse);

  return <Button 
            iconName="drive-folder-upload" 
            text={text} 
            onPress={onGet}/>;
};

export default ImagePicker;
