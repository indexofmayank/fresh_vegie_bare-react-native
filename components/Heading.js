import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import Feather from 'react-native-vector-icons/Feather';

class Headings extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Shop by Categories</Text>
                        <TouchableOpacity>
                            <Feather name="grid" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.categoryListContainer}>
                    <View style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Category 1</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Category 2</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Category 3</Text>
                    </View>
                    {/* Add more category boxes as needed */}
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xSmall,
        marginHorizontal: 12
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerTitle: {
        fontFamily: "Poppins-SemiBold",
        fontSize: SIZES.xLarge
    },
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

export default Headings;