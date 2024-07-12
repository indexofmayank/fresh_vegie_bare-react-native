import React from "react";
import {View, Text, Button} from 'react-native';



class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    handlePress = () => {
        this.props.navigation.navigate('Demo');
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Text>Profile Screen</Text>
                <Button title="Demo" onPress={this.handlePress} />
            </View>
        );
    }
}

export default ProfileScreen;