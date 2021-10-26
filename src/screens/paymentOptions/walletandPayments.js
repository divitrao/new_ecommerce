import React, { useState } from 'react';
import { View, Text,Image,style,StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import {Card,Box, NativeBaseProvider, linearGradient} from 'native-base';
import styles from "./styles"
import { your_payment_methods } from '../../api/data';


const WalletPayments = ({navigation}) => {

    
    return(
     <NativeBaseProvider>
        <View style={{ backgroundColor:'white',flex:1, paddingHorizontal:10}}>
            <Card width='100%' style={styles.card} >

              <View style={{flexDirection:'row'}}>
                 
                  <View>
                    <Image style={styles.wallet_rupee_image} source={require('../../assets/payment_screen/wallet_rupee.png')} />

                  </View>  
              
                <View>
                        <View>
                            <Text>
                                More Wallet Balance
                            </Text>

                        </View>   
                
                        <View style={styles.wallet_view}>
                            <Image style={{tintColor:'#F04E23'}} source={require('../../assets/images/currency_b.png')} />
                            
                            <Text style={{color:'#F04E23',fontWeight:'bold'}}>
                                789
                            </Text>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <Text style={{color: 'rgba(40, 152, 255, 1)',fontSize:11}}>
                                Earn more
                            </Text>
                            <Image style={styles.earn_more} source={require('../../assets/payment_screen/rightsidearrow.png')} />
                        </View>   

                </View>

            </View> 
            </Card>

           <View>
            <View>
                    <Text style={styles.payment_method_view}>
                            Your payment method
                    </Text>

 
                    
                        {your_payment_methods.map((item)=>{
                            return(
                                       
                                <Card   key={item.id} style={{elevation:2}}>
                                <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}>
                                        <View style={{flexDirection:'row',paddingVertical:12, justifyContent:'space-between'}}>
                                                <View style={{flexDirection:'row',}}>
                                                    <View style={{width:'5%'}}>
                                                       <Image style={{}} source={item.payment_type_image} />
                                                    </View>

                                                    
                                                        <Text style={{marginLeft:35}}>
                                                        {item.detail}
                                                        </Text>
                                                </View>
                                        </View>
                                       

                                       <Image style={{alignSelf:'center'}} source={require('../../assets/payment_screen/option_icon.png')} />


                                </View>
                                </Card> 
                                        
                            )

                        })}
                        
                        
                
               

             </View> 
           </View>   

           
</View>
</NativeBaseProvider>




    )
};


export default WalletPayments;