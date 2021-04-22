import React from 'react';
import { View } from 'react-native';
import Loading from '../Loading';

const ContentLoading = () => (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <Loading />
    </View>
);

export default ContentLoading;