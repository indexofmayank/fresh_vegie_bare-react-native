import React, {Component} from "react";
import {View, Text} from 'react-native';
import Demo from "../pages/Demo";
import Remo from "../pages/Remo";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createStackNavigator();

export default class AppStackNavigation extends Component {

    render() {
        return (
                <Stack.Navigator initialRouteName="BottomTabNavigation">
                    <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
                    <Stack.Screen name="Demo" component={Demo} />
                    <Stack.Screen name="Remo" component={Remo} />
                </Stack.Navigator>
        );
    }

}