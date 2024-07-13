import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from "../../constants";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Welcome from "../../components/Welcome";
import Slider from "../../components/Slider";
import Headings from "../../components/Heading";
import ProductRow from "../../components/ProductRow";


class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>

                <ScrollView>
                    <View style={styles.appBarWrapper}>
                        <View style={styles.appBar}>
                            <Ionicons name="location-outline" size={24} />
                            <Text style={styles.location}>ETA Greater Noida</Text>

                            <View style={{ alignItems: "flex-end" }}>
                                <View style={styles.cartCount}>
                                    <Text style={styles.cartNumber}>8</Text>
                                </View>
                                <TouchableOpacity>
                                    <Fontisto name='shopping-bag' size={24} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Welcome />
                    <Slider />
                    <Headings />
                    <ProductRow />
                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.samll
    },

    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    location: {
        fontFamily: "Poppins-SemiBold",
        fontSize: SIZES.medium,
        color: COLORS.gray
    },

    cartCount: {
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: "center",
        zIndex: 999
    },

    cartNumber: {
        fontFamily: "Poppins-Regular",
        fontWeight: "600",
        fontSize: 10,
        color: COLORS.lightWhite
    }

})


export default HomeScreen;