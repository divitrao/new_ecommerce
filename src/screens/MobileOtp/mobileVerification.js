
import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard  } from 'react-native';
import MobileDetails from '../../components/MobileVerification/mobileDetails';

export default function MobileVerification({navigation}) {

  const [form, setForm] = useState({})
  const [error, setErrors] = useState({})

  const onChange=({name,value})=>{
    setForm({...form, [name]:value})
    if(value != ''){
      setErrors((prev) => {
        return {...prev, [name]: null}
      });
    }
  }

  const onSubmit = () =>{
    if(!form.mobileNumber){
      setErrors((prev) => {
        return {...prev, mobileNumber: 'Please enter your mobile number'}
      });
    
    }
    else{
      navigation.navigate('otp_verification')
    }
  }
  
  
  return (
    <TouchableWithoutFeedback onPress={ () => { Keyboard .dismiss() } }>
      <MobileDetails onSubmit={onSubmit} onChange={onChange} form={form} errors={error}/>
    </TouchableWithoutFeedback>
  );
}

