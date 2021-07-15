import React from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const Root = ({children}) => (
  <LinearGradient colors={['#FB6620', '#fc7537']} style={styles.linear}>
    {children}
  </LinearGradient>
);

export default ({children}) => {
  let content;

  if (Platform.OS === 'ios') {
    content = (
      <Root>
        <SafeAreaView style={styles.page}>
          <StatusBar
            animated={true}
            barStyle="light-content"
            backgroundColor="#f28b5c"
          />

          {children}
        </SafeAreaView>
      </Root>
    );
  } else {
    content = (
      <Root>
        <View style={styles.page}>
          <StatusBar
            animated={true}
            barStyle="light-content"
            backgroundColor="#FB6620"
          />

          {children}
        </View>
      </Root>
    );
  }

  return content;
};
