import React from "react";
import { Text, View } from "react-native";
import styles from './styles'
import Search_bar from "../Home/search_bar_section/search_bar";
import Category_section from "./All_category/AllCategory";

const Category =({navigation})=>{
    return(
        <View style={styles.main_view}>
            <View style={{alignItems:'center',paddingLeft:10,paddingRight:10}}>
        <Search_bar navigation={navigation} />
        </View>
        <View style={styles.product_category}>
        <Category_section navigation={navigation} />
        </View>
        </View>
    )
}

export default Category


