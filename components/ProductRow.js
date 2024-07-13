import React, {Component} from "react";
import {View, Text, FlatList} from 'react-native';
import ProductCardView from "./ProductCardView";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
    {id: 1, image: require("../assets/products/samplefive.jpg"), title: 'Potato',  price: 22, detail: "The potato is a starchy root vegetable native to the Americas that is consumed as a staple food in many parts of the world. Potatoes are tubers of the plant Solanum tuberosum, a perennial in the nightshade family Solanaceae. Potato cultivars appear in a variety of colors, shapes, and sizes.", rating: 3 },
    {id: 2, image: require('../assets/products/samplethree.jpg'), title: 'Broccoli', price: 43, detail: "Broccoli (Brassica oleracea var. italica) is an edible green plant in the cabbage family (family Brassicaceae, genus Brassica) whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species Brassica oleracea.", rating: 4 },
    {id: 3, image: require('../assets/products/sampletwo.jpg'), title: 'Cabbage', price: 39, detail: "Cabbage is highly nutritious vegetable. Cabbages are rich in vitamin C, fiber, and vitamin K. They may help with heart and digestive health. Cabbage, which is often lumped into the same category as lettuce because of their similar appearance, is actually a part of the cruciferous vegetable family.", rating: 3},
    {id: 4, image: require('../assets/products/sampelfour.jpg'), title: 'Onion', price: 13, detail: "Onions are cultivated and used around the world. As a food item, they are often served raw as a vegetable or part of a prepared savoury dish, but can also be eaten cooked or used to make pickles or chutneys. They are pungent when chopped and contain certain chemical substances which may irritate the eyes", rating: 4},
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