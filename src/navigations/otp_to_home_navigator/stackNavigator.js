import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import OtpScreen from "../../screens/otp_verification/otp_screen";

import MyTabs from "../bottom_tab_navigator";
import MobileVerification from "../../screens/MobileOtp/mobileVerification";
import Namedetails from "../../screens/names/namedetails";
import Getlocation from "../../screens/location/getLocation";
import Veggies from "../../screens/category/vegetable";

import Custom_header from "../../screens/Custom_Headers";
import Review_Cart from "../../screens/reviewCart/reviewCart";
import Category from "../../screens/category/vegetable";
import TopTabNavigation from "../../components/customNavigation/topNavigator/topTabNavigator";
import PaymentOptions from "../../screens/paymentOptions/paymentOptions";
import SearchCategoriesNavigator from "../../components/customNavigation/topNavigator/searchCategoriesNavigator";
import Product from '../../screens/Product/index'
const stacks = createNativeStackNavigator()
const HomeStack = ()=>{



    return(
        
            <stacks.Navigator initialRouteName=''>
                <stacks.Screen name='Mob_number' options={{headerShown:false}} component={MobileVerification} />
                <stacks.Screen name='otp_verification' options={{headerShown:false}} component={OtpScreen} />
                <stacks.Screen name='name_detail' options={{headerShown:false}} component={Namedetails}/>
                <stacks.Screen name='Getlocation' options={{headerShown:false}} component={Getlocation} />
                <stacks.Screen name="homos" options={{headerShown:false}} component={MyTabs}  />
                <stacks.Screen name="topTab" component={SearchCategoriesNavigator} />
                <stacks.Screen options={({route})=>({headerTitle:route.params[0].header,
                    header:({navigation,route})=>{
                        return(
                            <Custom_header titles={route.params[0].header} navigation={navigation} />
                        )
                    }
                    })}   name="Vegetable_and_Dairy" component={TopTabNavigation} />
                    <stacks.Screen name="review_cart" options={{headerTitle:'Review Cart'}} component={Review_Cart} />
                    <stacks.Screen name='payment_option' options={{headerTitle:'Payment Option'}} component={PaymentOptions} />
                    <stacks.Screen name='product'   options={{headerTitle:''}} component={Product} />
            </stacks.Navigator>
        
    )

}

export default HomeStack