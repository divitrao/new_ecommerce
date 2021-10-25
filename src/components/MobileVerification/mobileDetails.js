
import React from 'react';
import {Text, View, Image } from 'react-native';
import FlatButton from './button';
import Input from './input';
import mobileNumberStyles from './styles';

export default function MobileDetails({onSubmit,onChange,form,errors}) {


  return (
      <View style={{backgroundColor:'white',flex:1}}>
          <View style={mobileNumberStyles.imageView}>
            <Image style={mobileNumberStyles.image} resizeMode='contain' source={require('../../assets/images/more_logo.jpg')} />
          </View>
          
          <View style={mobileNumberStyles.contentView}>
            <Text style={mobileNumberStyles.content}>Enter your mobile number</Text>
          </View>
          
          <View style={mobileNumberStyles.subContent}>
            <Text style={mobileNumberStyles.textContent}>Mobile Number</Text>
    
            <View style={[mobileNumberStyles.wrapper]}> 
              <Input style={[mobileNumberStyles.input]} 
                keyboardType="numeric" 
                icon={<Text style={mobileNumberStyles.phoneCode}>+91</Text>} 
                onChange={onChange}
                error={errors.mobileNumber}
                />
            </View>
    
          </View>
          
          <FlatButton onPress={onSubmit} text='Send verification code' />
      </View>
  );
}
