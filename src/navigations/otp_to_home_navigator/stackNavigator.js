import React from "react";
// import {createStackNavigator} from '@react-navigation/stack'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import OtpScreen from "../../screens/otp_verification/otp_screen";
import Home from "../../screens/Home/home";
const stacks = createNativeStackNavigator()
const HomeStack = ()=>{



    return(
        
            <stacks.Navigator initialRouteName='otp_verification'>
                <stacks.Screen name='otp_verification' options={{headerShown:false}} component={OtpScreen} />
                <stacks.Screen name='home' options={{headerShown:false}} component={Home} />
            </stacks.Navigator>
        
    )

}

export default HomeStack