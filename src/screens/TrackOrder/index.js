import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Tick from '../../assets/circled_tick/tick_for_delivery.svg'
import Truck from '../../assets/truck/truck.svg'
import Location from '../../assets/location_icon/location_grey.svg'
import Timeline from 'react-native-timeline-flatlist'
import Atta from '../../assets/cart_product/atta.svg'
import Coconut from '../../assets/cart_product/coconut.svg'
import Milk from '../../assets/cart_product/milk.svg'
import Tick_Success from '../../assets/circled_tick/tick.svg'


const data = [
    {
        time: '09:00',
        title: <Text style={{fontSize:12,color:'#636363'}}>Delivery from</Text>,
        description: <View style={{ marginHorizontal: 3 }}>
            <Text numberOfLines={3}>
                More Supermarket - HSR Layout 27th Main Rd, HSR Layout, Bengaluru, Karnataka 560034
            </Text>
        </View>,
        icon: <Truck />
    },
    {
        time: '10:45',
        title: <Text style={{fontSize:12,color:'#636363'}}>Delivery at</Text>,
        description:
            <View style={{ marginHorizontal: 3 }}><Text numberOfLines={3}>More Supermarket - HSR Layout 27th Main Rd, HSR Layout, Bengaluru, Karnataka 560034</Text></View>,
        icon: <Location />

    },
]



const cart = [
    {
        id: 1,
        item_name: 'Nandini Tonned Milk',
        quantity: 1,
        original_price: 19,
        discounted_price: 19,
        per_quantity: 3,
        measurement_unit: 'litre',
        picture: <Milk />,
        disable: false
    },
    {
        id: 2,
        item_name: 'Ashirwaad select atta',
        quantity: 1,
        original_price: 3315,
        discounted_price: 2293,
        per_quantity: 20,
        measurement_unit: 'weight',
        picture: <Atta />,
        disable: false
    },
    {
        id: 3,
        item_name: 'coconut',
        quantity: 1,
        original_price: 50,
        discounted_price: 40,
        per_quantity: 2,
        measurement_unit: 'piece',
        picture: <Coconut />,
        disable: false
    },
    {
        id: 4,
        item_name: 'coconut',
        quantity: 1,
        original_price: 50,
        discounted_price: 40,
        per_quantity: 2,
        measurement_unit: 'piece',
        picture: <Coconut />,
        disable: false
    },
    {
        id: 5,
        item_name: 'coconut',
        quantity: 1,
        original_price: 50,
        discounted_price: 40,
        per_quantity: 2,
        measurement_unit: 'piece',
        picture: <Coconut />,
        disable: false
    },
    {
        id: 6,
        item_name: 'Nandini Tonned Milk',
        quantity: 1,
        original_price: 19,
        discounted_price: 19,
        per_quantity: 3,
        measurement_unit: 'litre',
        picture: <Milk />,
        disable: false
    },
]

const TrackOrder = ({route}) => {
    const is_delivered = route.params['is_delivered']
    const DELIVERY_CHARGES = 55
    const TAXES = 60.12
    let Total_Price = (items)=>{
        let price = 0
        for(let i=0;i<cart.length;i++){
            price = price + items[i]['discounted_price']*items[i]['quantity']
           
        }
        return(
            price 
        )
    }
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ height: 100, flexDirection: 'row', alignItems: 'center' }}>
                    {!is_delivered &&  <View style={{paddingHorizontal:10}}>
                        <View style={{ paddingBottom: 10 }}>
                            <Tick width={30} height={30} fill={'#2898FF'} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Out for Delivery</Text>
                        </View>
                    </View>}

                    {is_delivered &&  <View style={{paddingHorizontal:10}}>
                        <View style={{ paddingBottom: 10 }}>
                            <Tick_Success width={30} height={30} fill={'#24AF8E'} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Order delivered successfully</Text>
                        </View>
                    </View>}

                </View>
                <View style={{ backgroundColor: 'white', height: 240 }}>
                    <Timeline data={data}
                        style={{ paddingTop: 13 }}
                        showTime={false}
                        innerCircle={'icon'}
                        circleColor='white'
                        lineColor='#C4C4C4'
                        eventContainerStyle={{}}
                        listViewStyle={{}}
                        


                    />

                    <View style={{ marginHorizontal: 40, marginBottom: 10 }}>
                        <View>
                            <Text>Delivey Slot</Text>
                        </View>
                        <View>
                            <Text>16:30 - 17:00</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20, backgroundColor: 'white' }}>
                    {cart.map((item) => {
                        return (
                            <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10,marginBottom:10 }}>
                                <View>
                                    {item.picture}
                                </View>
                                <View style={{ width: 100 }}>
                                    <View>
                                        <Text style={{ fontSize: 15 }} numberOfLines={1}>{item.item_name}</Text>
                                    </View>
                                    <View>
                                        {item.measurement_unit == 'litre' && <Text style={styles.quantity_bought}>{item.per_quantity} L </Text>}
                                        {item.measurement_unit == 'weight' && <Text style={styles.quantity_bought}>{item.per_quantity} kg </Text>}
                                        {item.measurement_unit == 'piece' && <Text style={styles.quantity_bought}>{item.per_quantity} piece </Text>}
                                    </View>
                                </View>

                                <View style={{ width: 60 }}>
                                    <View>
                                        <Text style={{ fontSize: 20, textAlign: 'right' }}>₹{item.discounted_price * item.quantity}</Text>
                                    </View>
                                    {item.discounted_price != item.original_price && <View>
                                        <Text style={{ textDecorationLine: 'line-through', textAlign: 'right', color: 'grey' }}>₹{item.original_price * item.quantity}</Text>
                                    </View>}
                                </View>
                            </View>
                        )
                    })}
                </View>

                <View style={{paddingHorizontal:10}}>

                    <View style={{ marginTop: 15, marginBottom: 35, backgroundColor: 'rgba(240, 78, 35,.02)' }}>
                        <View style={styles.summary}>
                            <View>
                                <Text>Item Total</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>₹ {Total_Price(cart)}</Text>
                            </View>
                        </View>

                        <View style={styles.summary}>
                            <View>
                                <Text style={{ textDecorationLine: 'underline', color: 'grey' }}>TAXES</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>₹ {TAXES}</Text>
                            </View>
                        </View>

                        <View style={styles.summary}>
                            <View>
                                <Text style={{ textDecorationLine: 'underline', color: 'grey' }}>Delivery Charges</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>₹ {DELIVERY_CHARGES}</Text>
                            </View>
                        </View>

                        <View style={styles.summary}>
                            <View>
                                <Text>Total Cost</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>₹ {Total_Price(cart) + TAXES + DELIVERY_CHARGES}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                { is_delivered && <View>

                    <TouchableOpacity style={{paddingHorizontal:10,marginBottom:20}}>
                        <View style={{width:'100%',backgroundColor:'#F04E23',height:36,borderRadius:6,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>
                                Repeat Order
                            </Text>
                            

                        </View>
                    </TouchableOpacity>

                </View>}

            </View>
        </ScrollView>
    )
}

export default TrackOrder


const styles = StyleSheet.create({
    quantity_bought: {

        color: 'grey',
        fontSize: 12,


    },

    summary:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
        alignItems:'center'
    },

    
})