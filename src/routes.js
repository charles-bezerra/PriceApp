import React from "react";

//Components
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import HomeScreen from "./screens/Home";
import ProductScreen from "./screens/Product";
import ProductsScreen from "./screens/Products";
import RegisterScreen from './screens/Register';
import ScanScreen from "./screens/Scan";
import ProductEditScreen from "./screens/ProductEdit";
import SwitchScreen from "./screens/SwitchScreen";

const StackApp = createStackNavigator();

export default () => (
    <NavigationContainer>
        <StackApp.Navigator>
                <StackApp.Screen options={{headerShown: false}} name="HOME" component={HomeScreen}/> 
                <StackApp.Screen options={{headerShown: false}} name="PRODUCT" component={ProductScreen}/> 
                <StackApp.Screen options={{headerShown: false}} name="PRODUCTS" component={ProductsScreen}/> 
                <StackApp.Screen options={{headerShown: false}} name="REGISTER" component={RegisterScreen}/>
                <StackApp.Screen options={{headerShown: false}} name="CAM_SCAN" component={ScanScreen}/>
                <StackApp.Screen options={{headerShown: false}} name="PRODUCT_EDIT" component={ProductEditScreen}/> 
                <StackApp.Screen options={{headerShown: false}} name="SWITCH" component={SwitchScreen}/>
        </StackApp.Navigator>
    </NavigationContainer>
)