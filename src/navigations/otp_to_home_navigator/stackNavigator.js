import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import OtpScreen from "../../screens/otp_verification/otp_screen";
import { View, Text } from "react-native";
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
<<<<<<< HEAD
<<<<<<< HEAD
import OrderPlaced from "../../screens/paymentOptions/orderplaced";
=======
=======
>>>>>>> 4b59b30dc1895e38126d5a97a35a483dc37d693f
import { Stack } from "native-base";
import MyOrders from "../../screens/Account/MyOrder";
import TrackOrder from "../../screens/TrackOrder";
import Help from '../../assets/help/help.svg'
<<<<<<< HEAD
>>>>>>> 87ac2a26e25af172f56899e565e5eb2e38aebcd9
=======
import OrderPlaced from "../../screens/paymentOptions/orderplaced";
import MyAddress from "../../screens/Account/my_address";
import WalletPayments from "../../screens/paymentOptions/walletandPayments";
import Product from '../../screens/Product'
import Search from '../../assets/search_icon/search_svg.svg'
import Share from '../../assets/share_icon/share.svg'
>>>>>>> 4b59b30dc1895e38126d5a97a35a483dc37d693f
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
<<<<<<< HEAD
<<<<<<< HEAD

                    <stacks.Screen name='order_placed' options={{headerShown:false}} component={OrderPlaced} />
=======
=======
>>>>>>> 4b59b30dc1895e38126d5a97a35a483dc37d693f
                    <stacks.Screen name='my_order' options={{headerTitle:'My Order'}} component={MyOrders} />
                    <stacks.Screen name='track_order' options={{headerTitle:'',headerRight:()=>{

                            return(
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <View style={{marginRight:3}}>
                                        <Help />
                                    </View>
                                    <View>
                                        <Text style={{color:'#7C7C7C'}}>Help</Text>
                                    </View>

                                </View>
                            )

                    }}} component={TrackOrder} />
<<<<<<< HEAD
>>>>>>> 87ac2a26e25af172f56899e565e5eb2e38aebcd9
=======
                    <stacks.Screen name='order_placed' options={{headerShown:false}} component={OrderPlaced} />
                    <stacks.Screen name='myAddress' options={{headerTitle:'My Address'}} component={MyAddress} />
                    <stacks.Screen name='walletAndPayment' options={{headerTitle:'My Wallet & Payments'}} component={WalletPayments} />
                    <stacks.Screen name='product'   options={{headerTitle:'',headerRight:()=>{
                        return(
                            <View style={{flexDirection:'row'}}>
                                <View style={{marginRight:10}}>
                                <Search />
                                </View>
                                <View>
                                <Share />
                                </View>
                                

                            </View>
                        )
                    }}} component={Product} />
>>>>>>> 4b59b30dc1895e38126d5a97a35a483dc37d693f
            </stacks.Navigator>
        
    )

}

export default HomeStack