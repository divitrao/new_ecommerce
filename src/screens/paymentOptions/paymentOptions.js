import React, { useState } from 'react';
import { View, Text,Image, FlatList, ScrollView } from 'react-native';
import { ArrowBackIcon,Radio,Input,Button,Box, NativeBaseProvider } from "native-base";
import styles from "./styles"

const PaymentOptions = ({navigation}) => {

    const icons = [
        {
            icon: <ArrowBackIcon size="10" />,
            iconName: "arrow-back",
          },
    ]

    const [value, setValue] = React.useState('')

    const [count, setCount] = React.useState(false)


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

    const more_payment_methods = [
        {
            id: 1,
            card_image:require('../../assets/payment_screen/creditdebit.png'),
            content:'Credit / Debit Card',
            arrow_image:require('../../assets/payment_screen/rightsidearrow.png')


        },   {
            id: 2,
            card_image:require('../../assets/payment_screen/upiwallet.png'),
            content:'UPI',
            arrow_image:require('../../assets/payment_screen/rightsidearrow.png')


        },
        {
            id: 3,
            card_image:require('../../assets/payment_screen/upiwallet.png'),
            content:'Wallet',
            arrow_image:require('../../assets/payment_screen/rightsidearrow.png')


        },  {
            id: 4,
            card_image:require('../../assets/payment_screen/cod.png'),
            content:'Cash On Delivery',
            arrow_image:require('../../assets/payment_screen/rightsidearrow.png')


        }
    ]


    return (
        
        
    
       <ScrollView>
 
       <View style={styles.paymentOption_main_view}>
                

            <NativeBaseProvider>
           <Box>
            <View style={styles.amount_flex}>
                <View>
                    <Text style={styles.amt}>
                        Amount Payable
                    </Text>
                    <Text style= {styles.amt_text}>
                        Including all taxes
                    </Text>
                </View>

                    <View>
                        <Text style={styles.amt}>
                            <Image
                               source={require('../../assets/images/currency_b.png')} />
                
                            393.6
                        </Text>
                        <Text style= {styles.savingRupee}>
                            you are saving 22 
                            <Image style={styles.rupeeImage}
                               source={require('../../assets/images/currency_b.png')} />
                        </Text>
                    </View>
                </View>
             </Box>
             </NativeBaseProvider>

            

            <View style={styles.deliveryfrom}>
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.deliveryIcon} source={require('../../assets/payment_screen/deliveryfrom.png')} />
                    <Text style={styles.deliveryIcon_style}>
                        Delivery From
                    </Text>
                 </View>
                <View>
                        <Text style={styles.address}>
                        More Supermarket - HSR Layout 27th Main Rd,
                         HSR Layout, Bengaluru, Karnataka 560034
                        </Text>
                </View>
           </View>

            <View style={styles.deliveryto}>
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.deliveryIcon} source={require('../../assets/payment_screen/deliveryto.png')} />
                    <Text style={styles.deliveryIcon_style}>
                        Delivery To
                    </Text>
                 </View>
                <View>
                        <Text style={styles.address}>
                        Home - 501, Sai Nidhi Residency, 27th cross road, HSR Layout, 
                        Sector 7, Bengaluru, Karnataka - 560068
                        </Text>
                </View>
             </View>

             <View style={styles.deliveryto}>
              
                   <Text style={styles.deliverySlot}>
                        Delivery Slot
                    </Text>
                 
                <View>
                        <Text style={styles.address}>
                        4.30 PM  -  5 PM
                        </Text>
                </View>
             </View>


             
             <NativeBaseProvider>
             <Box>
                <Text style={styles.text_YourPaymentMethod}>
                        Your Payment Method
                    </Text>

 
              <View>
                  {your_payment_methods.map((item)=>{
                      return(

                                <View key={item.id} style={styles.payment_view}>
                                <View style={{flexDirection:'row',}}>
                                    <Image style={styles.your_payment_methods} source={item.payment_type_image} />
                                

                                    
                                        <Text style={{marginLeft:10}}>
                                        {item.detail}
                                        </Text>
                                </View>

                                <View style={styles.radiobutton_view}>
                                    <Radio.Group  value={value}
                                                onChange={(nextValue) => {
                                                    setValue(nextValue)
                                                    // console.log(nextValue,'aytfhgsfuogdu')
                                                }}>
                                                    
                                                <Radio value={item.id}>
                                                <Text></Text>
                                                    </Radio>
                                    </Radio.Group>
                                    </View>
                                </View>
                      )

                  })}
                    

                
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                    {value!='' && <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:5}}>
                    {value == 2 && <View style={{width:83,height:36}}>
                    <Input textAlign='center'
                    maxLength={3}
                    keyboardType='numeric'
                                        mx="3"
                                        borderRadius='1'
                                        placeholder="CVV"
                                      
                                        /></View>} 
                    <View style={{width:153,height:36}}>
                    <Button style={{width:'100%'}}
                                            //  width='5/6'
                                                backgroundColor='#F04E23'>
                                               
                                              <View style={{flexDirection:'row'}}>
                                                   <View> 
                                                       <Image source={require('../../assets/payment_screen/pay_lock.png')} />
                                                    </View>
                                                    <View> 
                                                            <Text style={{marginLeft:10}} onPress={()=>navigation.navigate('order_placed')}> 
                                                            
                                                             Pay
                                                            </Text>
                                                    </View>
                                            </View>
                                            </Button> 
                    </View>
                    </View>
                            }
                </View>
                </View>
                    
          </Box>   
          </NativeBaseProvider>


 
          <NativeBaseProvider>
              <Box>
                    <Text style={styles.text_more_payment_methods}>
                        More Payment Method
                    </Text>

                   
                   <View>
                       {more_payment_methods.map((item)=>{
                           return(
                            <View key={item.id} style={styles.view_more_payment_methods}>
                            
                            <View style={{flexDirection:'row',alignItems:'center', padding:5}}> 
                                <Image style={{marginRight:10}} source={item.card_image} />
                            
                                <Text style={{}} >
                                    {item.content}
                                </Text>
    
                            </View>    
                            
                            <View style={{marginRight:25}}>
                                <Image source={item.arrow_image} />
                            </View>
                        
                    </View>
                           )
                       })}
                
                   </View>
                    

                </Box>
                </NativeBaseProvider>


</View>


</ScrollView>

)
}; 

export default PaymentOptions;
