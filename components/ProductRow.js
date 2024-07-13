import React, {Component} from "react";
import {View, Text, FlatList} from 'react-native';
import ProductCardView from "./ProductCardView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Product } from "../constants/product"; 

const data = Product;

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