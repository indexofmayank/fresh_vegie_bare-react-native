import React from "react";
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home screen</Text>
                <Icon name="location-outline" />
            </View>
        );
    }
}

export default HomeScreen;