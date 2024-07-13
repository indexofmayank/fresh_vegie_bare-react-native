import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

export default class CategoryCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.categoryListContainer}>
                <View style={styles.categoryBox}>
                    <Text style={styles.categoryText}>{this.props.Category.title}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap', // Optional: Wrap to next line if needed
        marginTop: 20,
    },
    categoryBox: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});