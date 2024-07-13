import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import Feather from 'react-native-vector-icons/Feather';
import CategoryCard from "./CategoryCard";

const data = [
    { id: 1, title: "Vegetables" },
    { id: 2, title: "Fruits" },
    { id: 3, title: "Additional Categories" },
    { id: 4, title: "Packaging Options" }
];

class Headings extends Component {

    render() {

        renderItem = ({ item }) => {
            return <CategoryCard Category={item} />
        }

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
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.samll,
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
});

export default Headings;