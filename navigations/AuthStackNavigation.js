import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/AuthStack/SignInScreen";
import SignUpScreen from "../screens/AuthStack/SignUpScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import RootNavigation from "./RootNavigation";
import CategoryPage from "../pages/CategoryPage";
import Demo from "../pages/Demo";

const Stack = createStackNavigator();

class AuthStackNavigation extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignInScreen" screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                    <Stack.Screen name="SignInScreen" component={SignInScreen} />
                </Stack.Navigator>

            </NavigationContainer>
        );
    }

}

export default AuthStackNavigation;