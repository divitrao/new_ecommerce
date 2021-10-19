import React from "react";
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react/cjs/react.development";
import Location_icon from '../../assets/location_icon/location.svg'
import Atta from '../../assets/cart_product/atta.svg'
import Coconut from '../../assets/cart_product/coconut.svg'
import Milk from '../../assets/cart_product/milk.svg'

const Review_Cart = () =>{

    

    const cart = [
        {
            id:1,
            item_name:'Nandini Tonned Milk',
            quantity:3,
            original_price:19,
            discounted_price:19,
            per_quantity:3,
            measurement_unit:'litre',
            picture:<Milk />
        },
        {
            id:2,
            item_name:'Ashirwaad select atta',
            quantity:20,
            original_price:3315,
            discounted_price:2293,
            per_quantity:20,
            measurement_unit:'weight',
            picture:<Atta />
        },
        {
            id:3,
            item_name:'coconut',
            quantity:2,
            original_price:50,
            discounted_price:40,
            per_quantity:2,
            measurement_unit:'piece',
            picture:<Coconut />
        }
    ]

    return(
        <View style={{paddingLeft:5,paddingRight:5}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <View>
                    <Location_icon />
                </View>
                <View style={{paddingLeft:3}}>
                    <View>
                        <Text style={{color:'grey',fontSize:12}}>Delivery to</Text>
                    </View>
                    <View>
                        <Text>Home- 501, Sai Nidhi Residency, 27th....</Text>
                    </View>
                </View>
                </View>
                <View >
                    <TouchableOpacity>
                <Text style={{color:'#F04E23'}}>Change</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={{fontSize:12,paddingTop:8}}>Shipment of 2 items from SuperMart - HSR Layout </Text>
            </View>
            <View>
                <FlatList
                data={cart}
                renderItem={({item})=>{
                    return(
                        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingTop:10}}>
                            <View>
                                {item.picture}
                            </View>
                            <View style={{width:100}}>
                                <View>
                                    <Text style={{fontSize:15}} numberOfLines={1}>{item.item_name}</Text>
                                </View>
                                <View>
                                    {item.measurement_unit=='litre' && <Text style={styles.quantity_bought}>{item.per_quantity} L </Text>}
                                    {item.measurement_unit=='weight' && <Text style={styles.quantity_bought}>{item.per_quantity} kg </Text>}
                                    {item.measurement_unit=='piece' && <Text style={styles.quantity_bought}>{item.per_quantity} piece </Text>}
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={styles.button_decrement}><Text style={{textAlign:'center'}}>-</Text></View>
                                <View style={styles.quantity}><Text style={{textAlign:'center'}}>{item.quantity}</Text></View>
                                <View style={styles.button_increment}><Text style={{textAlign:'center'}}>+</Text></View>
                            </View>
                            <View style={{width:60}}>
                                <View>
                                <Text style={{fontSize:20, textAlign:'right'}}>₹{item.discounted_price}</Text>
                                </View>
                                { item.discounted_price!=item.original_price && <View>
                                    <Text style={{textDecorationLine:'line-through',textAlign:'right',color:'grey'}}>₹{item.original_price}</Text>
                                </View>  }
                            </View>
                        </View>
                    )
                }}
                />
            </View>
        </View>
    )
}
export default Review_Cart


const styles = StyleSheet.create({
    button_decrement:{
        height:25,
        width:25,
        borderWidth:1,
        borderTopLeftRadius:6,
        borderBottomLeftRadius:6,
        
    },
    button_increment:{
        height:25,
        width:25,
        borderWidth:1,
        borderBottomRightRadius:6,
        borderTopRightRadius:6

    },
    quantity:{
        width:26,
        height:25,
        borderWidth:1,
        borderRightWidth:0,
        borderLeftWidth:0
    },
    quantity_bought:{

        color:'grey',
        fontSize:12

    }
})