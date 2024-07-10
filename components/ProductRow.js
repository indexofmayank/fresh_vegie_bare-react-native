import React, { Component } from "react";
import { View, Text } from 'react-native';
import ProductCardView from "./ProductCardView";

const Products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
];


class ProductRow extends Component {
    render() {
        return (
            <View>
                <ProductCardView />
            </View>
        );
    }
}

export default ProductRow;