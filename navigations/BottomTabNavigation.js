import React from "react";
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../screens/AppStack/HomeScreen";
import OfferScreen from "../screens/AppStack/OfferScreen";
import CategoryScreen from "../screens/AppStack/CategoryScreen";
import ProfileScreen from "../screens/AppStack/ProfileScreen";

const Tab = createBottomTabNavigator();

class BottomTabNavigation extends React.Component {
    render() {
        return (
            <Tab.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: '#4F7942', // Fern Green
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({focused, color, size}) => (
                            <Image
                            source={focused ? require('../assets/home.png') : require('../assets/home.png')}
                            style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: color,
                                    size: size
                                }}

                            />
                        )
                    }}

                />
                <Tab.Screen
                    name="Offer"
                    component={OfferScreen}
                    options={{
                        tabBarIcon: ({focused, color, size}) => (
                            <Image
                                source={focused ? require('../assets/offer.png') : require('../assets/offer.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: color,
                                    size: size
                                }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Category"
                    component={CategoryScreen}
                    options={{
                        tabBarIcon: ({focused, color, size}) => (
                            <Image
                                source={focused ? require('../assets/category.png') : require('../assets/category.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: color
                                }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({focused, color, size}) => (
                            <Image
                                source={focused ? require('../assets/profile.png') : require('../assets/profile.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: color
                                }}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        );
    }
}

export default BottomTabNavigation;
