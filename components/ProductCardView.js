import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation

const ProductCardView = ({ product }) => {
  const navigation = useNavigation();  // Get navigation object using the hook
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('ProductDetailPage', { product })}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={product.image}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
          <Text style={styles.price}>₹{product.price}</Text>
            <Text style={styles.offerPrice}>₹{product.offerPrice}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.frenGreen} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    position: 'relative',  // Ensure absolute positioning works properly
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.samll / 2,
    marginTop: SIZES.samll,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: SIZES.samll,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  price: {
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.medium,
    marginBottom: 2,
    textDecorationLine: 'line-through',  // Apply strikethrough if offerPrice exists
    color: 'red'  // Change color to indicate original price
  },
  offerPrice: {
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.medium,
    color: 'green',
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  }
});
