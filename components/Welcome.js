import React, {Component} from "react";
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import { COLORS, SIZES } from "../constants";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Welcome extends Component {
   
    
    render() { //havet to use navigation here
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
                    <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
                        {" "}
                        Fint The Most
                    </Text>
                    <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
                        {" "}
                        Luxurious Furniture
                    </Text>
                </Text>

                <View style={styles.searchContainer}>
                    <TouchableOpacity>
                        <Feather name="search" size={SIZES.xxLarge} />
                    </TouchableOpacity>
                    <View style={styles.searchWrapper}>
                        <TextInput
                            style={styles.searchInput}
                            value=""
                            onPressIn={() => console.log('cliced search button')}
                            placeholder= "what are you looking for"
                            />
                    </View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons name="camera-outline" size={SIZES.xxLarge} color={COLORS.green} />
                    </TouchableOpacity> 
    
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    
    container: {
        width: "100%"
    },


    welcomeTxt: (color, top) => ({
        fontFamily: 'Poppins-Bold',
        fontSize: SIZES.xxLarge - 6,
        marginTop: top,
        color: color,
        marginHorizontal: 12
    }),

    searchContainer : {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium
    },

    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.samll
    },
    
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.samll,
        borderRadius: SIZES.samll
    },

    searchInput: {
        fontFamily: "Poppins-Regular",
        width: "100%",
        height: "20",
        paddingHorizontal: SIZES.samll
    },

    searchBtn: {
        width: 50,
        height: 44,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary
    }

})



export default Welcome;

