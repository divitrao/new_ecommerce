import React, { useState } from 'react';
import { View, Text,Image,style,StyleSheet, ScrollView,TouchableOpacity } from 'react-native';


const OrderPlaced = ({navigation}) => {
    // console.log(navigation)



    return (

        <View style={{backgroundColor:'white',flex:1}}>
            <ScrollView>

            <View style={styles.orderImage}>
                <Image  style={{width:161,height:144}}resizeMode='contain' source={require('../../assets/payment_screen/orderplaced.png')} />

            
            </View>

            <View>
                <Text style={styles.orderText}>
                Your Order has been placed
                </Text>

                <Text style ={styles.orderDescription}>
                Your order has been confirmed and will be delivered shortly.
                </Text>
            </View>


            <View>
                <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('track_order',{is_delivered:false})}>
                    <View style={styles.trackbutton}>
                        <Text style={styles.trackbuttonText}>Track Order</Text>
                    </View>
               </TouchableOpacity>
                             
                <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('homos')}>
                        <View style={styles.backbutton}>
                            <Text style={styles.backbuttonText}>Back to Home</Text>
                        </View>
                </TouchableOpacity>
                
            </View>

            </ScrollView>

        </View>

    )
};


const styles = StyleSheet.create({
    
    orderImage:{
        alignItems:'center',
        marginTop:100

    },
    trackbuttonText: {
       color:'white',
        fontSize: 14,
        textAlign: 'center',
      },
      backbuttonText: {
        color:'black',
         fontSize: 14,
         textAlign: 'center',
         textDecorationLine:'underline'
         
       },

      trackbutton:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 220,
        height:48,
        margin: 'auto',
        marginTop: 35,
        backgroundColor: '#f04f24',
        
    },
    touch: {
        alignItems: 'center'
    },

    backbutton:{
        marginTop:15,
        width:93,
        height:17,
        
    
    },
    orderText:{
        paddingHorizontal:80,
        fontWeight:'700',
        fontSize:20,
        marginTop: 30,
        fontWeight:"bold",
        textAlign:"center"

    },
    orderDescription:{
       
        fontWeight:'400',
        fontSize:14,
        color:'grey',
        padding:10,
        paddingHorizontal:80,
        
        textAlign:"center"
    },
        


    




})









export default OrderPlaced;