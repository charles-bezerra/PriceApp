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
import UploadImageScreen from "./screens/UploadImage";

const StackApp = createStackNavigator();

export default () => (
  <NavigationContainer>
    <StackApp.Navigator screenOptions={{headerShown: false}}>
      <StackApp.Screen name="HOME" component={HomeScreen} options={{animation: 'fade'}} />
      <StackApp.Screen name="PRODUCT" component={ProductScreen} options={{animation: 'fade'}} />
      <StackApp.Screen name="PRODUCTS" component={ProductsScreen} options={{animation: 'slide_from_bottom'}} />
      <StackApp.Screen name="CAM_SCAN" component={ScanScreen} options={{animation: 'slide_from_bottom'}} />
      <StackApp.Screen name="PRODUCT_EDIT" component={ProductEditScreen} options={{animation: 'fade'}} />
      <StackApp.Screen name="SWITCH" component={SwitchScreen} options={{animation: 'slide_from_bottom'}} />
      <StackApp.Screen name="UPLOAD_IMAGE" component={UploadImageScreen} options={{animation: 'slide_from_bottom'}} />
      <StackApp.Screen name="REGISTER" component={RegisterScreen} options={{animation: 'slide_from_bottom'}} />
    </StackApp.Navigator>
  </NavigationContainer>
)