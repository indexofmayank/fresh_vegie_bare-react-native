import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/AuthStack/SignInScreen";
import SignUpScreen from "../screens/AuthStack/SignUpScreen";

const Stack = createStackNavigator();

class AuthStackNavigation extends Component {

    render() {
        return (
                <Stack.Navigator initialRouteName="SignInScreen">
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                    <Stack.Screen name="SignInScreen" component={SignInScreen} />
                </Stack.Navigator>
        );
    }

}

export default AuthStackNavigation;