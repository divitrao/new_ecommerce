import React, { useState } from 'react';
import { View, Text,Image, FlatList,StyleSheet, ScrollView } from 'react-native';
import { ArrowBackIcon,Radio,Input,Button,Box, NativeBaseProvider } from "native-base";

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
 
       <View style={{flex:1,paddingHorizontal:10,backgroundColor:'white'}}>
                

            <NativeBaseProvider>
           <Box>
            <View style={styles.amount_flex}>
                <View>
                    <Text style={styles.amt}>
                        Amount Payable
                    </Text>
                    <Text style= {{"fontWeight":"400", fontSize:10 }}>
                        Including all taxes
                    </Text>
                </View>

                    <View>
                        <Text style={styles.amt}>
                            <Image
                               source={require('../../assets/images/currency_b.png')} />
                
                            393.6
                        </Text>
                        <Text style= {{"fontWeight":"400", fontSize:10, color:'green' }}>
                            you are saving 22 
                            <Image style={{height:10, tintColor:'green'}}
                               source={require('../../assets/images/currency_b.png')} />
                        </Text>
                    </View>
                </View>
             </Box>
             </NativeBaseProvider>

            

            <View style={styles.deliveryfrom}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{marginTop:10, position:'absolute'}} source={require('../../assets/payment_screen/deliveryfrom.png')} />
                    <Text style={{color:'grey', paddingLeft:30}}>
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
                    <Image style={{marginTop:10, position:'absolute'}} source={require('../../assets/payment_screen/deliveryto.png')} />
                    <Text style={{color:'grey', paddingLeft:30}}>
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
              
                   <Text style={{color:'grey', paddingLeft:30}}>
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
                <Text style={{fontWeight:"500", fontSize:10, padding:10, paddingVertical:20}}>
                        Your Payment Method
                    </Text>

 
              <View>
                  {your_payment_methods.map((item)=>{
                      return(

                                <View key={item.id} style={{flexDirection:'row',paddingVertical:15, justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',}}>
                                    <Image style={styles.your_payment_methods} source={item.payment_type_image} />
                                

                                    
                                        <Text style={{marginLeft:10}}>
                                        {item.detail}
                                        </Text>
                                </View>

                                <View style={{marginRight:20}}>
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
                    {/* <FlatList data={your_payment_methods} 
                         renderItem= {({item}) => {
                             return (
                           
                               <View style={{flexDirection:'row',paddingVertical:15, justifyContent:'space-between'}}>
                               <View style={{flexDirection:'row',}}>
                                    <Image style={styles.your_payment_methods} source={item.payment_type_image} />
                                
                
                                    
                                        <Text style={{marginLeft:10}}>
                                        {item.detail}
                                        </Text>
                                </View>

                                <View style={{marginRight:20}}>
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
                                }} /> */}

                
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
                    
                
                {/* {value !='' && <View style={styles.paybutton}>
                                   { value == 2 && <Input textAlign='center'
                                        mx="3"
                                        borderRadius='1'
                                        placeholder="CVV"
                                        w={{
                                            base: "30%",
                                            md: "25%",
                                        }}
                                        />}

                                  
                                   <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',borderWidth:1,width:153}}> 
                                    
                                            <Button style={{width:'100%'}}
                                            //  width='5/6'
                                                backgroundColor='#F04E23'>
                                               
                                              <View style={{flexDirection:'row'}}>
                                                   <View> 
                                                       <Image source={require('../../assets/payment_screen/pay_lock.png')} />
                                                    </View>
                                                    <View> 
                                                            <Text style={{marginLeft:10}}> 
                                                            
                                                             Pay
                                                            </Text>
                                                    </View>
                                            </View>
                                            </Button>  

                                    </View>  

                    </View> } */}
          </Box>   
          </NativeBaseProvider>


 
          <NativeBaseProvider>
              <Box>
                    <Text style={{fontWeight:"500", fontSize:10, padding:15, paddingVertical:25}}>
                        More Payment Method
                    </Text>

                   
                   <View>
                       {more_payment_methods.map((item)=>{
                           return(
                            <View key={item.id} style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
                            
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
                    {/* <FlatList data={more_payment_methods} 
                    renderItem= {({item}) => {
                        return (
                                <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
                            
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
                    }} /> */}

                   </View>
                    

                </Box>
                </NativeBaseProvider>


</View>


</ScrollView>

)
}; 


const styles = StyleSheet.create({

    header:{
        
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingTop:10,
        alignContent:'flex-start'

    },

    sidearrow:{
        paddingVertical:5
        
    },

    amount_flex:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'flex-start',
        paddingHorizontal:10,
        paddingTop:20
    },

    amt:{
        fontSize:16,
        fontWeight:'400'
    },
    deliveryfrom:{
        paddingTop:15,
        paddingHorizontal:10,
        
    },
    deliveryto:{
        paddingTop:15,
        paddingHorizontal:10,
    },
    address:{
            fontSize:12,
            fontWeight:'400',
            paddingHorizontal:30,
            textAlign:"left"

    },
    payment_methods:{
        flexDirection:'row',
        padding:10,
        fontWeight:"400", 
        fontSize:12
    },
    your_payment_methods:{
        // marginHorizontal:20,
        width: 34,
        height: 24,
        marginLeft:20
    },
    more_payment_methods:{
        marginHorizontal:20,
       

    },
    radiobutton:{
        marginLeft:85,
        justifyContent:'flex-end'
     
       
    }, 
    collapse:{
        marginLeft:135,
        width: 10,
      
    },
    paybutton:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingTop:10,
        marginLeft:100
    }
    
  

})

export default PaymentOptions;
