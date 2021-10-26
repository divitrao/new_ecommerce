import 'react-native-gesture-handler';
import React from 'react';
import HomeStack from './src/navigations/otp_to_home_navigator/stackNavigator';
import { NavigationContainer } from '@react-navigation/native';



const App=({navigation}) => {

console.log(navigation)
  return (
    
    <NavigationContainer>
     <HomeStack />
    </NavigationContainer>
    
  );
};



export default App;






