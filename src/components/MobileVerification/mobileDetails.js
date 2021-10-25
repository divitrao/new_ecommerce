
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import FlatButton from './button';
import Input from './input';


export default function MobileDetails({onSubmit,onChange,form,errors}) {


  return (
      <View style={{backgroundColor:'white',flex:1}}>
          <View style={styles.imageView}>
            <Image style={styles.image} resizeMode='contain' source={require('../../assets/images/more_logo.jpg')} />
          </View>
          
          <View style={styles.contentView}>
            <Text style={styles.content}>Enter your mobile number</Text>
          </View>
          
          <View style={styles.subContent}>
            <Text style={styles.textContent}>Mobile Number</Text>
    
            <View style={[styles.wrapper]}> 
              <Input style={[styles.input]} 
                keyboardType="numeric" 
                icon={<Text style={styles.phoneCode}>+91</Text>} 
                onChange={onChange}
                error={errors.mobileNumber}
                />
            </View>
    
          </View>
          
          <FlatButton onPress={onSubmit} text='Send verification code' />
      </View>
  );
}


const styles = StyleSheet.create({

    contentView: {
      marginTop: 30,
      alignItems: 'center',
    },

    content: {
      fontSize: 20,
    },
    

    imageView:{
      marginTop: 50,
      alignItems: 'center',
    },
    
    image:{
      height: 100,
    },

    subContent:{
        marginTop: 40,
        padding: 20
    },

    textContent: {
      color: 'grey',
    },

  
    phoneCode:{
      fontSize:20,
    }

})