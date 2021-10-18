import React from "react";
import { StyleSheet ,TouchableOpacity, Text, View, TextInput } from "react-native";
import COLORS from "../../assets/themes/colors";
import color from "../../assets/themes/colors";

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
            <View style={styles.wrapper}>
            <View style={styles.icon}>{icon && icon}</View>
            <TextInput 
                style={[styles.input,{borderBottomColor: getBorderColor()}]} 
                onChangeText={(value)=>{
                    onChange({name:"mobileNumber", value})
                }}
                keyboardType="numeric" maxLength={10} errors={error}/>
            </View>
            { error &&  <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({

    icon:{
        marginBottom:8,
    },
    
      input: {
        borderBottomColor: '#a89f9f',
        flex: 1,
        fontSize: 20,
      },

      wrapper:{
        
        height: 42,
        borderColor: 'grey',
        borderBottomWidth: 1,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
      },
      error:{
          color: COLORS.danger,
          paddingTop:4,
          fontSize: 14,  
      }
})