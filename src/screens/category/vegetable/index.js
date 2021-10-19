import React from "react";
import {View, Text, ScrollView} from 'react-native'
import Custom_header from "../../Custom_Headers";

const Veggies = ({route})=>{
    const myList = Array(10).fill(route.params[0].product_id)
    // console.log(myList)
    const data = {
        0:{
            'item':'Vegetable'
        },
        1:{
            'item':'Egss seafood'
        },
        2:{
            'item':'Cooking essetial'
        },
        3:{
            'item':'Vegetable'
        },
        4:{
            'item':'beverage'
        },
        5:{
            'item':'cooking essential'
        },
        6:{
            'item':'Vegetable'
        },
        7:{
            'item':'dairy,bread'
        },
        8:{
            'item':'breakfast'
        },
        9:{
            'item':'Vegetable'
        },
        10:{
            'item':'dairy,bread'
        },
        11:{
            'item':'Personal care '
        },
    }

    return(
        
        <View style={{flex:1,alignContent:'center'}}>
            {/* <Custom_header /> */}
            <Text style={{textAlign:'center',fontSize:40}}>
                {route.params[0].product_id}
            </Text>
            <Text>
                
            <View style={{alignItems:'center'}}>
            {myList.map((item_num,i)=>{
                return(
                    
                <Text style={{textAlign:'center',fontSize:20}} key={i}>
                    {data[item_num]['item']}
                </Text>
                )
            })}
            </View>
            
            </Text>
            </View>
    )
}

export default Veggies