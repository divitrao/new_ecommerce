import React, { useState } from 'react';
import { View, Text,Image,style,StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import {Card,Input, NativeBaseProvider,Button} from 'native-base';


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
            <View style={{marginHorizontal:10,paddingTop:15}}>

                <Button backgroundColor='#EDEDED' borderRadius='20' _text={{color:'#7E8090'}}
                 leftIcon= {<Image resizeMode="contain"  source={require('../../assets/Account/add.png')} alt="list"/>}>
                    Add a new address
                </Button>
                
            </View>
            
  <View>
        <View style={{marginTop:25}}>
            {Address.map((item)=>{
                return(
                <Card key={item.id} style={{margin:5,borderRadius:1}}>
                
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={{marginHorizontal:7, fontWeight:'600',fontSize:16,paddingVertical:8}}>
                                {item.name}
                            </Text>

                            <View>
                            <Image source={item.options_icon} />
                           </View>

                        </View>    
                    
                    <View style={{}}>
                        <View> 
                        
                            <Text style={{marginHorizontal:7}} >
                                {item.content}
                            </Text>

                        </View>    
                    
                        
                    </View>
            
                </Card>
                )
            })}
            </View>
            </View>
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