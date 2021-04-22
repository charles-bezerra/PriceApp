import React from "react";
import { View, StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
    linear: {
        flex: 1,
    },
    page: {
        flex: 1,
        height: "100%",
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 8,
        margin: 0, 
    }
});

const Root = ({ children }) => (
    <LinearGradient colors={["#FB6620", "#fc7537"]} style={styles.linear}>
        {children}
    </LinearGradient>
)

export default ({children}) => {
    let content = <></>;

    if(Platform.OS === 'ios') {
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
        )
    }
    else {
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
        )
    }

    return content;
}