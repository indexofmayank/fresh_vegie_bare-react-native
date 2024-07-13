import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { Category } from '../constants/Category';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

const CategoryPage = () => {
    const navigation = useNavigation();
    const [expandedCategory, setExpandedCategory] = useState(null);

    const toggleCategory = (id) => {
        setExpandedCategory(prevId => (prevId === id ? null : id));
    };

    const renderSubGroupItem = (item) => (
        <Text style={styles.subGroupItem}>{item}</Text>
    );

    const renderCategoryItem = ({ item }) => {
        const isExpanded = expandedCategory === item.id;
        const sections = Object.keys(item.sub_group).map(subGroupTitle => ({
            title: subGroupTitle,
            data: item.sub_group[subGroupTitle]
        }));

        return (
            <View style={styles.categoryContainer}>
                <TouchableOpacity onPress={() => toggleCategory(item.id)} style={styles.categoryHeader}>
                    <Text style={styles.categoryTitle}>{item.title}</Text>
                    <Feather name={isExpanded ? "chevron-up" : "chevron-down"} size={20} />
                </TouchableOpacity>
                {isExpanded && sections.map((section, index) => (
                    <View key={index}>
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                        {section.data.map(renderSubGroupItem)}
                    </View>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Categories</Text>
            </View>
            <FlatList
                data={Category}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.small,
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999
    },
    header: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: SIZES.medium,
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999,
        paddingBottom: SIZES.samll
    },
    headerTitle: {
        fontFamily: "Poppins-SemiBold",
        fontSize: SIZES.xLarge,
    },
    categoryContainer: {
        marginBottom: SIZES.large,
        marginTop: SIZES.samll,
    },
    categoryHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: SIZES.samll,
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.lightGray,
        borderRadius: 8,
    },
    categoryTitle: {
        fontFamily: "Poppins-SemiBold",
        fontSize: SIZES.xLarge,
    },
    sectionHeader: {
        fontFamily: "Poppins-Medium",
        fontSize: SIZES.medium,
        paddingVertical: SIZES.samll,
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.lightGray,
    },
    subGroupItem: {
        fontFamily: "Poppins-Regular",
        fontSize: SIZES.medium,
        paddingVertical: SIZES.samll,
        paddingHorizontal: SIZES.medium,
    },
});

export default CategoryPage;
