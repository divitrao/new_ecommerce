import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import HomeStack from './src/navigations/otp_to_home_navigator/stackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';


const App=() => {
  LogBox.ignoreLogs(["Require cycle:"])

  return (
    
    <NavigationContainer>
    
      
      <HomeStack />
    
    </NavigationContainer>
    
  );
};



export default App;






