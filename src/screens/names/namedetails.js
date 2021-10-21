import React from "react";
import { StyleSheet,TouchableOpacity, Text, View,ScrollView ,Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from "react";




const Namedetails = ({navigation}) => {

    return (
      <View style={{backgroundColor:'white',flex:1}}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>
            <View>
              <View style={styles.logo_view}>
                <Image style={styles.image} resizeMode='contain' source={require('../../assets/images/more_logo.jpg')} />
              </View> 

              <View style={styles.placeHolder} >
                 <View> 
                      <Text style={styles.content}>Your Name</Text>
                      <TextInput
                      placeholder="Your Full Name" style={styles.input} />

                  </View>    

                  <View>
                      <Text style={styles.emailcontent}>Your Email</Text>
                      <TextInput
                      placeholder="Your Email" style={styles.input} />

                  </View>
                </View> 
               
                 <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('Getlocation')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Submit and Continue</Text>
            </View>
        </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      </View>
  );
}


const styles = StyleSheet.create({

  logo_view:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center"

  },

    image:{
      
        height: 100,
        width:150,
       
      },

    content: {
        marginTop: 100,
        marginHorizontal:20,
        paddingVertical:10

      },

    emailcontent: {
        marginTop: 40,
        marginHorizontal:20,
        marginHorizontal:20,
        paddingVertical:10

      },  


     textcontent: {
        color: 'grey',
        
      },

      input: {
        alignItems:"center",
        marginHorizontal:20,
        borderBottomWidth: 1,
        borderBottomColor: '#a89f9f',
        paddingVertical:8
       },

       touch: {
        alignItems: 'center'
    },
    
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 220,
        margin: 'auto',
        marginTop: 50,
        backgroundColor: '#f04f24',
        
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    }
      
        
      
  
      


})


export default Namedetails;