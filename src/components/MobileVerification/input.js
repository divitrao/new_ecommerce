import React from "react";
import { Text, View, TextInput } from "react-native";
import COLORS from "../../assets/themes/colors";
import mobileNumberStyles from "./styles";


export default function Input({icon,error,onChange}){

    const getBorderColor=()=>{
        if(error){
            return COLORS.danger;
        }
        else{
            return COLORS.grey;
        }
    }

    return (
        <View>
            <View style={mobileNumberStyles.wrapper}>
            <View style={mobileNumberStyles.icon}>{icon && icon}</View>
            <TextInput 
                style={[mobileNumberStyles.input,{borderBottomColor: getBorderColor()}]} 
                onChangeText={(value)=>{
                    onChange({name:"mobileNumber", value})
                }}
                keyboardType="numeric" maxLength={10} errors={error}/>
            </View>
            { error &&  <Text style={mobileNumberStyles.error}>{error}</Text>}
        </View>
    )
}
