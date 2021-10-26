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

export default Namedetails;