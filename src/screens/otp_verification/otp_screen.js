import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import Container from "../../components/container";
import styles from "./styles";
import OtpForm from "../otpForm/form";


const OtpScreen = ({navigation})=>{
    // console.log(navigation)
    // const More_Logo = require('../../assets/More_icon_svg/moreLogo.svg')
    //{uri:'https://www.moreretail.in/frontend/dist/img/logo.png'}
    return(
        
        
            <Container>
            <View style={styles.main_view}>
            <Image source={require('../../assets/images/more_logo.jpg')} style={{height:100,width:150, resizeMode:'contain',flex:1}} />
            <Text style={styles.otpinformation}> Enter 4 digit Verification code </Text>
            <OtpForm navigation_link={navigation} /> 
            <Text style={styles.resend}> Resend OTP  </Text>
            </View>
            </Container>
        
       
    )   
}

export default OtpScreen