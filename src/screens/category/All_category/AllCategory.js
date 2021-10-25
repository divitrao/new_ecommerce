import React, { useState } from 'react'
import {View, Text, FlatList, ScrollView, Image, TouchableOpacity} from 'react-native'
import styles from './styles'
import { food_data_with_navigation as food_data } from '../../../api/data'

const Category_section = ({navigation})=>{
    

    const fetch_it=(product_id)=>{
        navigation.navigate('Vegetable_and_Dairy',[{header:food_data[product_id].content,product_id:product_id}])
        
    }


    return(
        <View style={styles.main_view}>
            <View style={styles.title}>
            <Text style={styles.title_text}>All categories</Text>
            <Text style={styles.muted_text}>Curated for your need </Text>
            </View>
            <View style={styles.list_view}>
                <FlatList 
                data={food_data}
                numColumns={3}
                renderItem={({item})=>{
                    return(
                            <TouchableOpacity  style={[styles.content_box,{backgroundColor:item.colors,borderColor:item.border_color}]} onPress={()=>fetch_it(item.id)}>
                            <Image source={item.image}  />
                            <Text style={styles.content_text}>{item.content}</Text>
                            </TouchableOpacity>
                    )
                }}
                
                
                showsVerticalScrollIndicator={false}
                />
            </View>
            
        </View>
    )
}


export default Category_section