import React, { useState } from 'react';
import { View, Text,Image,style,StyleSheet, ScrollView,TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import {Card,Input, NativeBaseProvider} from 'native-base';


const MyAddress = () => {


    const Address = [
        {
            id:1,
            name:'Home',
            content:"501, Sai Nidhi Residency, 27th cross road,HSR Layout, Sector 7, Bengaluru, Karnataka - 560068",
            options_icon:require('../../assets/payment_screen/option_icon.png'),
        },
        {
            id:2,
            name:"Friend's Home",
            content:"#16/B, Ambalipura - Sarjapur Rd, Kaikondrahalli, Bengaluru, Karnataka 560035",
            options_icon:require('../../assets/payment_screen/option_icon.png'),
        }
    ]

    return (

    // <View>
    <NativeBaseProvider>
    {/* <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}> */}
        
          
            <View style={{shadowColor:'rgba(0, 0, 0, 0.9)'}}>
                
                 <Input textAlign='center'
                 maxLength={3}
                 keyboardType='default'
                                     mx="3"                  //form
                                     borderRadius='2'
                                    //  fontSize='12'
                                     placeholder="Add a new address"


                InputLeftElement={
                    <Image style={{}} source={require('../../assets/Account/add.png')}/>
                }                     
                />
                
            </View>
            
  <View>
        <View style={{marginTop:25}}>
            {Address.map((item)=>{
                return(
                <Card key={item.id} style={{margin:5,borderRadius:1}}>
                
                        <View>
                            <Text style={{marginHorizontal:7, fontWeight:'600',fontSize:16,paddingVertical:5}}>
                                {item.name}
                            </Text>

                        </View>    
                    
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'row',alignItems:'center', paddingVertical:5}}> 
                        
                            <Text style={{marginHorizontal:6}} >
                                {item.content}
                            </Text>

                        </View>    
                    
                        <View style={{marginLeft:15}}>
                            <Image source={item.options_icon} />
                        </View>
                    </View>
            
                </Card>
                )
            })}
            </View>
            </View>
            

            {/* </TouchableWithoutFeedback> */}
            </NativeBaseProvider>
// {/* </View> */}

    )
};




const styles = StyleSheet.create ({

    home:{
        paddingTop:15,
        paddingHorizontal:10,
    },
    
})



export default MyAddress;