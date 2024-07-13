import React, {Component} from "react";
import {View, Text, FlatList} from 'react-native';
import ProductCardView from "./ProductCardView";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
    {id: 1, image: require("../assets/products/samplefive.jpg"), title: 'Potato',  price: 22 },
    {id: 2, image: require('../assets/products/samplethree.jpg'), title: 'Broccoli', price: 43 },
    {id: 3, image: require('../assets/products/sampletwo.jpg'), title: 'Cabbage', price: 39},
    {id: 4, image: require('../assets/products/sampelfour.jpg'), title: 'Onion', price: 13},
];
export default class ProductRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        renderItem = ({item}) => {
            return <ProductCardView product={item} />
        }

        return (
           
           <SafeAreaView>
           <FlatList
           data={data}
           renderItem={renderItem}
           keyExtractor={item => item.id}
           numColumns={2}
           />
           </SafeAreaView>
          
        );
    }

}