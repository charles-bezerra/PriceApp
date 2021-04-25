import React from 'react'
import { View } from 'react-native';

const VSpacing = ({children, style}) => (
    <View style={[{
        height: "auto",
        paddingVertical: 8
    }, 
        style ?
        style :
        {}
    ]}>
        {children}
    </View>
);

export default VSpacing;
