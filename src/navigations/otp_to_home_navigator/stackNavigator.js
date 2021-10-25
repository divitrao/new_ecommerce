import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import OtpScreen from "../../screens/otp_verification/otp_screen";
import { View, Text, TouchableOpacity } from "react-native";
import MyTabs from "../bottom_tab_navigator";
import MobileVerification from "../../screens/MobileOtp/mobileVerification";
import Namedetails from "../../screens/names/namedetails";
import Getlocation from "../../screens/location/getLocation";
import Custom_header from "../../screens/Custom_Headers";
import Review_Cart from "../../screens/reviewCart/reviewCart";
import TopTabNavigation from '../../navigations/topNavigator/topTabNavigator';
import PaymentOptions from "../../screens/paymentOptions/paymentOptions";
import SearchCategoriesNavigator from "../../navigations/topNavigator/searchCategoriesNavigator";
import MyOrders from "../../screens/Account/MyOrder";
import TrackOrder from "../../screens/TrackOrder";
import Help from '../../assets/help/help.svg'
import OrderPlaced from "../../screens/paymentOptions/orderplaced";
import MyAddress from "../../screens/Account/my_address";
import WalletPayments from "../../screens/paymentOptions/walletandPayments";
import Product from '../../screens/Product'
import Search from '../../assets/search_icon/search_svg.svg'
import Share from '../../assets/share_icon/share.svg'
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
                    <stacks.Screen name='order_placed' options={{headerShown:false}} component={OrderPlaced} />
                    <stacks.Screen name='myAddress' options={{headerTitle:'My Address'}} component={MyAddress} />
                    <stacks.Screen name='walletAndPayment' options={{headerTitle:'My Wallet & Payments'}} component={WalletPayments} />
                    <stacks.Screen name='product' options={({route})=>{return({headerTitle:'',headerRight:()=>{
                        
                        return(
                            <View style={{flexDirection:'row'}}>
                            <View style={{marginRight:10}}>
                                <TouchableOpacity onPress={()=>{route.params.navigation.navigate('Search')}}>
                            <Search />
                            </TouchableOpacity>
                            </View>
                            <View>
                            <Share />
                            </View>
                            
                
                        </View>
                        )
                    }})}}  component={Product} />
            </stacks.Navigator>
        
    )

}

export default HomeStack
