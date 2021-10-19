import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const My_List =({navigation})=>{

    return(
        <TouchableOpacity onPress={()=>navigation.navigate('review_cart')}>
        <View style={{alignItems:'center',backgroundColor:'#fcc9c5',marginVertical:100,height:50,}}>
            <Text style={{fontSize:40}}>MY list view</Text>
            
            
        </View>
        </TouchableOpacity>
    )
}

export default My_List