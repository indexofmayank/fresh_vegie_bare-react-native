import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ProductDetailPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {product} = route.params;
    
    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { /* Handle adding to favorites */ }}>
                    <Ionicons name="heart" size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <Image
                source={product.image}
                style={styles.image}
            />
            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{product.title}</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>₹ {product.offerPrice}</Text>
                    </View>
                </View>
                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {/*rating */}
                        {[...Array(product.rating)].map((_, index) => (
                            <Ionicons
                                key={index}
                                name='star'
                                size={24}
                                color="gold"
                            />
                        ))}
                    <Text style={styles.ratingText}>{product.rating}</Text>
                    </View>
                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => { }}>
                            <SimpleLineIcons name='plus' size={20} />
                        </TouchableOpacity>
                        <Text style={styles.ratingText}>{product.rating}</Text>
                        <TouchableOpacity onPress={() => { }}>
                            <SimpleLineIcons name='minus' size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descText}>
                        {product.detail}
                    </Text>
                </View>
                <View style={{ marginBottom: SIZES.samll }}>
                    <View style={styles.location}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name='location-outline' size={20} />
                            <Text>ETA Greater Noida</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
                            <Text> Free Delievry</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>Buy now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={styles.addCart}>
                        <Fontisto name='shopping-bag' size={24} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    image: {
       aspectRatio: 2,
        resizeMode: 'cover'
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.samll,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 44,
        top: 20
    },
    ratingRow: {
        paddingBottom: SIZES.samll,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 10,
        top: 5
    },
    rating: {
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: SIZES.large
    },
    decriptionWrapper: {
        marginTop: SIZES.large * 2,
        marginHorizontal: SIZES.large - 2
    },
    descriptionWrapper: {
        marginTop: SIZES.large * 2,
        marginHorizontal: SIZES.large
    },
    description: {
        fontFamily: "Poppins-Medium",
        fontSize: SIZES.large - 2
    },
    descText: {
        fontFamily: "Poppins-Regular",
        fontSize: SIZES.samll,
        textAlign: "justify",
        marginBottom: SIZES.samll
    },
    location: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        marginHorizontal: 12,
        padding: 5,
        borderRadius: SIZES.large
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: SIZES.large
    },
    price: {
        padding: 10,
        fontFamily: 'Poppins-SemiBold',
        fontSize: SIZES.large
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    ratingText: {
        color: COLORS.gray,
        fontFamily: "Poppins-Medium",
        paddingHorizontal: 5
    },
    cartRow: {
        paddingBottom: SIZES.samll,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width,
    },
    cartBtn: {
        width: SIZES.width * 0.7,
        backgroundColor: COLORS.frenGreen,
        padding: SIZES.samll,
        borderRadius: SIZES.large,
        marginLeft: 12
    },
    cartTitle: {
        fontFamily: "Poppins-SemiBold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite,
        marginLeft: SIZES.samll
    },
    addCart: {
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: SIZES.samll,
        backgroundColor: COLORS.frenGreen,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default ProductDetailPage;
