import React from 'react';
import { Text, View, Image } from 'react-native';

import BlackArea from '../../components/BlackArea';
import ButtonBack from '../../components/ButtonBack';
import Col from '../../components/Col';
import Navbar from '../../components/Navbar';
import Screen from '../../components/Screen';
import VSpacing from '../../components/VSpacing';
import ImagePicker from '../../components/ImagePicker';

import { getLogo } from '../../controllers/logo.controller';

import { defaultID } from '../../constants';

import styles from './styles';

const ContentWithoutLogo = () => (
  <View style={styles.contentWithoutLogo}>
    <Text style={styles.title}>Nenhuma imagem encontrada</Text>
  </View>
)

const ContentWithLogo = ({ source }) => (
  <View style={styles.contentWithoutLogo}>
    <Text style={styles.title}>Imagem salva</Text>
    <Image style={styles.imageLogo} source={source}/>
  </View>
)

export default () => {
  const [logo, setLogo] = React.useState(null);

  const get = React.useCallback(() => {
    getLogo(defaultID)
    .then( (responseLogo) => {
      if(responseLogo) {
        setLogo(responseLogo);
      }
    });
  }, [setLogo]);

  React.useEffect(() => {
    get();
  }, [get]);

  return (
    <Screen>
      <Navbar left={<ButtonBack/>}/>
      
      <VSpacing/>

      <BlackArea title="Carregar logo para impressão" style={{ flex: 1 }}>
        <Col style={{ flex: 1 }}>
          <Col style={{ flex: 1, justifyContent: 'center' }}>
            {
              logo ? (
                <ContentWithLogo source={{ uri: logo.uri }}/>
              ) :
              (
                <ContentWithoutLogo/>
              )
            }
          </Col>

          <ImagePicker 
            onDone={get}
            text='Escolher imagem'/>
        </Col>
      </BlackArea>
    </Screen>
  );
};
