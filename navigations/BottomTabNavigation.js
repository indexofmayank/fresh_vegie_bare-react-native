import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from "../screens/HomeScreen";
import OfferScreen from "../screens/OfferScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

class BottomTabNavigation extends React.Component {
    render(){
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Offer" component={OfferScreen} />
                <Tab.Screen name="Category" component={CategoryScreen} />
                <Tab.Screen name="Proflie" component={ProfileScreen} />
            </Tab.Navigator>
        );
    }
}

export default BottomTabNavigation;