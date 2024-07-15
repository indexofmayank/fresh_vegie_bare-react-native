import React, { Component } from "react";
import { View, Text } from 'react-native';
import Demo from "../pages/Demo";
import Remo from "../pages/Remo";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import ProductDetailPage from "../pages/ProductDetailPage";
import CategroyPage from "../pages/CategoryPage";
import RootNavigation from "./RootNavigation";

const Stack = createStackNavigator();

export default class AppStackNavigation extends Component {

    render() {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName="BottomTabNavigation" screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
                    <Stack.Screen name="ProductDetailPage" component={ProductDetailPage} />
                    <Stack.Screen name="Demo" component={Demo} />
                    <Stack.Screen name="Remo" component={Remo} />
                    <Stack.Screen name="CategroyPage" component={CategroyPage} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
8
}