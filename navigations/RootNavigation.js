import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStackNavigation from "./AuthStackNavigation";
import AppStackNavigation from "./AppStackNavigation";

class RootNavigation extends Component {
    isLoggedIn = null;
    token = null;
    constructor(props) {
        super(props);
        this.state = {
            userToken: null,
        };
    }

    componentDidMount() {
        this._storeData();
        //will call the retrieve data
        this._retrieveData();
        const { route } = this.props;
        this.token = route?.params?.token;
        if (this.token !== null && this.token !== 'null') {
            this._storeData();
            this._retrieveData();
        } else {
            this.props.navigation.goBack();
        }
    }

    _storeData = async () => {
        try {
            // Storing 'null' as a string to represent null value
            console.log(this.token);
            await AsyncStorage.setItem('@userToken', this.token);
        } catch (error) {
            console.error('Error saving data: ', error);
        }
    };

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('@userToken');
            if (value !== null && value !== 'null') {
                console.log('Retrieved data: ', value);
                // Here you can set retrieved data to state
                this.setState({ userToken: value });
            } else {
                console.log('No data found or value is null');
                this.setState({ userToken: null });
            }
        } catch (error) {
            console.error('Error retrieving data: ', error);
        }
    };

    render() {
        if (this.state.userToken !== null) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }

        return (
            <>
                {this.isLoggedIn ? (
                    <AppStackNavigation />
                ) : (
                    <AuthStackNavigation />
                )}
            </>
        );
    }
}
export default RootNavigation;
