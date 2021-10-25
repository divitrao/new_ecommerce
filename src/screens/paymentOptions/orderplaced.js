import React, { useState } from 'react';
import { View, Text,Image,style,StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import styles from "./styles"

const OrderPlaced = ({navigation}) => {



    return (

        <View style={styles.orderPlaced_main_view}>
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


export default OrderPlaced;