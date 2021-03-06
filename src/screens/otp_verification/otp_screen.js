import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import OtpForm from "../otpForm/form";


const OtpScreen = ({navigation})=>{
    return(
            <View style={styles.main_view}>
            <Image source={require('../../assets/images/more_logo.jpg')} style={{height:100,width:150, resizeMode:'contain'}} />
            <Text style={styles.otpinformation}> Enter 4 digit Verification code </Text>
            <OtpForm navigation_link={navigation} /> 
            <Text style={styles.resend}> Resend OTP  </Text>
            </View>
            
        
       
    )   
}

export default OtpScreen