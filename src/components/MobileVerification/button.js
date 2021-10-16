import React from "react";
import { StyleSheet ,TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({text, onPress}){
    return (
        <TouchableOpacity style={styles.touch} onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touch:{
        alignItems: 'center'
    },
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 220,
        // margin: 'auto',
        marginTop: 50,
        backgroundColor: '#f04f24',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    }

})