import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import Feather from 'react-native-vector-icons/Feather';
import CategoryCard from "./CategoryCard";
import { Category } from '../constants/Category';
import {useNavigation} from '@react-navigation/native';

const data = Category;

const Headings = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return <CategoryCard Category={item} />
    }

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Shop by Categories</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Demo')}>
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
