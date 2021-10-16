import { Formik } from "formik";
import {Platform, ToastAndroid} from 'react-native'
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Button, TextInput, TouchableOpacity,Text, View } from "react-native";
import styles from  './styles';

const OtpForm = (navigation_link)=>{
    // console.log(navigation_link,'hemlo')
    const isAndroid = Platform.OS
    const [otpArray, setOtpArray] = useState([])
    const [fillAll, setFillAll] = useState(false)
    const [invalidotp, setInvalidOtp] = useState(false)
    const [OtpSuccessful, setOtpSuccessful] = useState(false)
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);


    const HandleSubmit=(navigation_link)=>{
        // console.log(otpArray.join(''))
        if (otpArray.join('').length!=4){
            setFillAll(true)
            // ToastAndroid.show('input all',ToastAndroid.LONG)
        }
        if(otpArray.join('')!='1111' && otpArray.join('').length==4){
            setInvalidOtp(true)
        }
        else if(otpArray.join('')=='1111'){
            setOtpSuccessful(true)
            // navigation_link.navigation_link.navigate('home') 
            navigation_link.navigation_link.navigate('name_detail')

        }
    }

    const onOTPKeyPress = (index) => {
        
        return ({ nativeEvent: { key: value } }) => {
 //autofocus to previous input if the value is blank and existing value is also blank
            if (value === 'Backspace' && otpArray[index] === '') {
                if (index === 1) {
                    inputRef1.current.focus();
                } else if (index === 2) {
                    inputRef2.current.focus();
                } else if (index === 3) {
                    inputRef3.current.focus();
                }
                if (isAndroid && index > 0) {
                    const otpArrayCpy = otpArray.concat();
                    otpArrayCpy[index - 1] = '';
                    setOtpArray(otpArrayCpy);
                }
            }
        };
    };

    const onOptChange = (index) => {
        return (value) => {
                   if (isNaN(Number(value))) {
                       return;
                   }
                   const otpArrayCpy = otpArray.concat();
                   otpArrayCpy[index] = value;
                   setOtpArray(otpArrayCpy);
                   if (value !== '') {
                       if (index === 0) {
                           inputRef2.current.focus();
                       } else if (index === 1) {
                           inputRef3.current.focus();
                       } else if (index === 2) {
                           inputRef4.current.focus();
                       }
                   }
        };
        };

    useEffect(()=>{
        setFillAll(false)
        setInvalidOtp(false)
    },[otpArray])

    return(
        
        <View style={styles.main_view}>
            <View style={styles.input_view} >
{[inputRef1, inputRef2, inputRef3, inputRef4].map(
      	(inputRef, i) => (
           		<TextInput
                 	   ref={inputRef}
                       onChangeText={onOptChange(i)}
                       onKeyPress={onOTPKeyPress(i)}
                       value={otpArray[i]}
                       keyboardType="numeric"
                       textContentType="oneTimeCode"
                       maxLength={1}
                       key={i}
                       autoFocus={i === 0 ? true : undefined}
                       style={styles.input}
                       containerStyle={{ flex: 0.15 }}
                    //    onFocus = {remove_error()}
            	/>
      	)
)}

</View>
<View style={styles.errorView}>
{fillAll && 
            <Text style={styles.errorText}>Please fill all the inputs</Text>
            }
{invalidotp && 
            <Text style={styles.errorText}>Invalid Otp</Text>
            }
{OtpSuccessful && 
            <Text style={styles.success}>Validation Successfull</Text>
            }
</View>
<TouchableOpacity style={styles.touch} onPress={()=>HandleSubmit(navigation_link)}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Verify Phone Number</Text>
            </View>
        </TouchableOpacity>
</View>
    
    )

    
}

export default OtpForm