import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MobileVerification from '../screens/MobileOtp/mobileVerification';
import Home from '../screens/MobileOtp/Categories';



const LoginStack=()=>{

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            
            <Stack.Screen name="Login"  component={MobileVerification} />
            <Stack.Screen name="Categories"  component={Home} />
        </Stack.Navigator>
    )
}

export default LoginStack


