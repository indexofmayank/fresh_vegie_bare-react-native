import React, {Component} from "react";
import {View, Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import AuthStackNavigation from "./AuthStackNavigation";

class RootNavigation extends Component {

    isLoggedIn = null;
    constructor(props){
        super(props);
        this.state = {
            userToken: null,
        };
    }

    componentDidMount() {
        this._storeData();
        //will call the retrieve data
        this._retrieveData();
    }
    _storeData = async () => {
        try {
            await AsyncStorage.setItem(
                '@userToken',
                JSON.stringify(null)
            );
        } catch (error) {
                console.error('Error saving data: ', error);
        }
    };

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('@userToken');
            if(value !== null) {
                const data = JSON.parse(value);
                console.log('Retrieved data: ', data);
                //Here you can set retrived data to state
                this.setState({userToken: data});
            } else {
                console.log('No data found');
            }
        } catch (error) {
            console.error('Error retrieving data: ', error);
        }
    };

    render() {

        if(this.state.userToken !== null) {
            isLoggedIn = true;
        } else {
            isLoggedIn = false; 
        }

       // const userToken = null ;

        return (
               <>
               {isLoggedIn !== null ? (
                <BottomTabNavigation />
            ): (
                <AuthStackNavigation />
            )}
               </>
        );

    }


}
 
export default RootNavigation;