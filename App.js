import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import HomeStack from './src/navigations/otp_to_home_navigator/stackNavigator';
import OtpScreen from './src/screens/otp_verification/otp_screen';
import { NavigationContainer } from '@react-navigation/native';


const App=() => {
  

  return (
    <NavigationContainer>
    
      {/* <OtpScreen /> */}
      <HomeStack />
    
    </NavigationContainer>
  );
};



export default App;

