import React from "react";
// import {createStackNavigator} from '@react-navigation/stack'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import OtpScreen from "../../screens/otp_verification/otp_screen";
import Home from "../../screens/Home/home";
import MyTabs from "../bottom_tab_navigator";
import MobileVerification from "../../screens/MobileOtp/mobileVerification";
import Namedetails from "../../screens/names/namedetails";
import Getlocation from "../../screens/location/getLocation";
import Veggies from "../../screens/category/vegetable";
import { height } from "styled-system";
import Custom_header from "../../screens/Custom_Headers";
const stacks = createNativeStackNavigator()
const HomeStack = ()=>{



    return(
        
            <stacks.Navigator initialRouteName=''>
                <stacks.Screen name='Mob_number' options={{headerShown:false}} component={MobileVerification} />
                <stacks.Screen name='otp_verification' options={{headerShown:false}} component={OtpScreen} />
                <stacks.Screen name='name_detail' options={{headerShown:false}} component={Namedetails}/>
                <stacks.Screen name='Getlocation' options={{headerShown:false}} component={Getlocation} />
                {/* <stacks.Screen name='home' options={{headerShown:false}} component={Home} /> */}
                <stacks.Screen name="homos" options={{headerShown:false}} component={MyTabs}  />
                <stacks.Screen options={({route})=>({headerTitle:route.params[0].header,
                    header:({navigation,route})=>{
                        return(
                            <Custom_header titles={route.params[0].header} navigation={navigation} />
                        )
                    }
                    })}   name="Vegetable_and_Dairy" component={Veggies} />
            </stacks.Navigator>
        
    )

}

export default HomeStack