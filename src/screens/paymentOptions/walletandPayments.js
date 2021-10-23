import React, { useState } from 'react';
import { View, Text,Image,style,StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import {Card,Box, NativeBaseProvider, linearGradient} from 'native-base';


const WalletPayments = ({navigation}) => {

    const your_payment_methods = [
        {
            id:1,
            payment_type_image:require('../../assets/payment_screen/gpay.png'),
            detail:'partha.borah@okhdfcbank'
        },
        {
            id:2,
            payment_type_image:require('../../assets/payment_screen/mastercard.png'),
            detail:'4862 - XXXXXXXX - 1001'
        }
    ]

    
    return(
     <NativeBaseProvider>
        <View>
            <Card style={styles.card} >

            {/* <LinearGradient 
                    style={styles.gradient} 
                    locations={[0, 1.0]} 
                    colors={['#F04E23', '#FFBB0D']}
            /> */}
            {/* bg={{
                        linearGradient: {
                        colors: ['#F04E23', '#FFBB0D'],
                        start: [0, 0],
                        end: [1, 0],
                        },
                    }} */}
              <View style={{flexDirection:'row'}}>
                 
                  <View>
                    <Image style={{width:16,height:16,padding:10,margin:10}} source={require('../../assets/payment_screen/wallet_rupee.png')} />

                  </View>  
              
                <View>
                        <View>
                            <Text>
                                More Wallet Balance
                            </Text>

                        </View>   
                
                        <View style={{flexDirection:'row',width:38, height:19,marginVertical:4}}>
                            <Image style={{tintColor:'#F04E23'}} source={require('../../assets/images/currency_b.png')} />
                            
                            <Text style={{color:'#F04E23',fontWeight:'bold'}}>
                                789
                            </Text>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <Text style={{color: 'rgba(40, 152, 255, 1)',fontSize:11}}>
                                Earn more
                            </Text>
                            <Image style={{tintColor:'blue',height:6,width:4, marginTop:5,marginLeft:4}} source={require('../../assets/payment_screen/rightsidearrow.png')} />
                        </View>   

                </View>

            </View> 
            </Card>


            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        <View>
            <View>
                    <Text style={{fontWeight:"500", fontSize:10, padding:15,marginTop:15,paddingVertical:20}}>
                            Your Payment Method
                    </Text>

 
                    <Card>
                        {your_payment_methods.map((item)=>{
                            return(
                                       

                                <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}>
                                        <View key={item.id} style={{flexDirection:'row',paddingVertical:13, justifyContent:'space-between'}}>
                                                <View style={{flexDirection:'row',}}>
                                                    <Image style={styles.your_payment_methods} source={item.payment_type_image} />
                                                

                                                    
                                                        <Text style={{marginLeft:10}}>
                                                        {item.detail}
                                                        </Text>
                                                </View>
                                        </View>
                                       

                                       <Image style={{alignSelf:'center'}} source={require('../../assets/payment_screen/option_icon.png')} />


                                </View>

                                    





                                        
                            )

                        })}
                        
                        </Card> 
                
               

             </View> 
           </View>   

           
</View>
</NativeBaseProvider>




    )
};


const styles= StyleSheet.create ({
    
    card:{
        marginTop:10,
        // marginHorizontal:50,
        // width:328,
        width:360,
        //  height:90,
        alignSelf:'center',
        backgroundColor:'rgba(240, 78, 35, 0.1)',

        
    },
    your_payment_methods:{
        // marginHorizontal:20,
        width: 34,
        height: 24,
        // marginLeft:10
    },

})

export default WalletPayments;