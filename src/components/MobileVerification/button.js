import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import mobileNumberStyles from "./styles";

export default function FlatButton({text, onPress}){
    return (
        <TouchableOpacity style={mobileNumberStyles.touch} onPress={onPress}>
            <View style={mobileNumberStyles.button}>
                <Text style={mobileNumberStyles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}
