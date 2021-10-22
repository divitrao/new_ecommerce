import React, { useState } from 'react'
import {View, Text, FlatList, ScrollView, Image, TouchableOpacity} from 'react-native'
import Veggies from '../vegetable'
import styles from './styles'

const Category_section = ({navigation})=>{
    // console.log(navigation,'bbbbb')
    let [header_name,setHeader_name] = useState('')
    const food_data = [
        {
            id:0,
            image: require('../../../assets/Product_icon/vegetable.png'),
            content:'Fruits & Vegetable',
            colors:'rgba(83, 177, 117, 0.1)',
            border_color:'rgba(83, 177, 117, 1)',
            navigation_key:'Vegetable_and_Dairy'
        },
        {
            id:1,
            image: require('../../../assets/Product_icon/meat.png'),
            content:'Eggs, Seafood & Meat',
            colors:'rgba(248, 164, 76, 0.1)',
            border_color:'rgba(248, 164, 76, 1)',
            navigation_key:'Vegetable_and_Dairy'
            
        },
        {
            id:2,
            image: require('../../../assets/Product_icon/cooking.png'),
            content:'Cooking essentials',
            colors:'rgba(131, 106, 246, 0.15)',
            border_color:'rgba(131, 106, 246, 1)',
            navigation_key:'Vegetable_and_Dairy'
        },
        {
            id:3,
            image: require('../../../assets/Product_icon/vegetable.png'),
            content:'Fruits & Vegetable',
            colors:'rgba(131, 106, 246, 0.15)',
            border_color:'rgba(131, 106, 246, 1)',
            navigation_key:'Vegetable_and_Dairy'
        },
        {
            id:4,
            image: require('../../../assets/Product_icon/beverage.png'),
            content:'Beverages',
            colors:'rgba(248, 164, 76, 0.1)',
            border_color:'rgba(248, 164, 76, 1)',
            navigation_key:'Vegetable_and_Dairy'
        },
        {
            id:5,
            image: require('../../../assets/Product_icon/cooking.png'),
            content:'Cooking essentials',
            colors:'rgba(83, 177, 117, 0.1)',
            border_color:'rgba(83, 177, 117, 1)',
            navigation_key:'Vegetable_and_Dairy'
        },
        {
            id:6,
            image: require('../../../assets/Product_icon/vegetable.png'),
            content:'Fruits & Vegetable',
            colors:'rgba(248, 164, 76, 0.1)',
            border_color:'rgba(248, 164, 76, 1)',
            navigation_key:'Vegetable_and_Dairy'
        },
        {
            id:7,
            image: require('../../../assets/Product_icon/dairy.png'),
            content:'Dairy, Bread & Eggs',
            colors:'rgba(83, 177, 117, 0.1)',
            border_color:'rgba(83, 177, 117, 1)',
            navigation_key:'Vegetable_and_Dairy'
        },
        {
            id:8,
            image: require('../../../assets/Product_icon/dairy_and_bread.png'),
            content:'Breakfast and essentials',
            colors:'rgba(131, 106, 246, 0.15)',
            border_color:'rgba(131, 106, 246, 1)',
            navigation_key:'Vegetable_and_Dairy'
        },
        {
            id:9,
            image: require('../../../assets/Product_icon/vegetable.png'),
            content:'Fruits & Vegetable',
            colors:'rgba(83, 177, 117, 0.1)',
            border_color:'rgba(83, 177, 117, 1)',
            navigation_key:'Vegetable_and_Dairy'
        },
        {
            id:10,
            image: require('../../../assets/Product_icon/dairy.png'),
            content:'Dairy, Bread & Eggs',
            colors:'rgba(248, 164, 76, 0.1)',
            border_color:'rgba(248, 164, 76, 1)',
            navigation_key:'Vegetable_and_Dairy'
            
        },
        {
            id:11,
            image: require('../../../assets/Product_icon/hygine.png'),
            content:'Personal Care & Cosmetics',
            colors:'rgba(131, 106, 246, 0.15)',
            border_color:'rgba(131, 106, 246, 1)',
            navigation_key:'Vegetable_and_Dairy'
        }
    ]

    const fetch_it=(product_id)=>{
        setHeader_name(food_data[product_id].content)
        navigation.navigate('Vegetable_and_Dairy',[{header:food_data[product_id].content,product_id:product_id}])
        
    }


    return(
        <View style={styles.main_view}>
            <View style={styles.title}>
            <Text style={styles.title_text}>All categories</Text>
            <Text style={styles.muted_text}>Curated for your need </Text>
            </View>
            {/* <ScrollView> */}
            <View style={styles.list_view}>
                <FlatList 
                data={food_data}
                // style={{flexDirection:'row'}}
                // columnWrapperStyle={styles.columnWrapperStyle}
                numColumns={3}
                renderItem={({item})=>{
                    return(
                        
                        // <View style={[styles.content_box,{backgroundColor:item.colors,borderColor:item.border_color}]} >
                            <TouchableOpacity  style={[styles.content_box,{backgroundColor:item.colors,borderColor:item.border_color}]} onPress={()=>fetch_it(item.id)}>
                            <Image source={item.image}  />
                            <Text style={styles.content_text}>{item.content}</Text>
                            </TouchableOpacity>
                        // </View>
                        
                    )
                }}
                
                
                showsVerticalScrollIndicator={false}
                />
            </View>
            
        </View>
    )
}


export default Category_section