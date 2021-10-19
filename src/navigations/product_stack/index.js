import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Veggies from "../../screens/category/vegetable";

const stacks = createNativeStackNavigator()

const Product_Stack = ()=>{
    <stacks.Navigator>
        <stacks.Screen name="Vegetable_and_Dairy" component={Veggies}  />
    </stacks.Navigator>
}

export default Product_Stack