import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Timeline from 'react-native-timeline-flatlist'
import Truck from '../../../assets/truck/truck.svg'
import Location from '../../../assets/location_icon/location_grey.svg'
import Tick from '../../../assets/circled_tick/tick.svg'
import {
    Box,
    Heading,
    Icon,
    AspectRatio,
    Image,
    Center,
    // Text,
    HStack,
    Stack,
    NativeBaseProvider
} from 'native-base';
import { height } from 'styled-system';

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
        title: <Text style={{fontSize:12,color:'#636363'}}>Delivery to</Text>,
        description:
            <View style={{ marginHorizontal: 3 }}><Text numberOfLines={3}>More Supermarket - HSR Layout 27th Main Rd, HSR Layout, Bengaluru, Karnataka 560034</Text></View>,
        icon: <Location />

    },
]

const MyOrders = ({navigation}) => {
    let MyList = Array(5).fill(1)
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <View style={{ backgroundColor: '#E5E5E5', height: 50, paddingLeft:10 }}>
                        <Text style={{ lineHeight: 50 }}>Upcoming orders</Text>
                    </View>
                    <View style={{ height: 350, backgroundColor: 'white', paddingHorizontal: 8 }}>
                        <View style={{ paddingTop: 13 }}><Text style={{ fontSize: 24 }}>Order id #19919293</Text></View>
                        <View style={{ paddingTop: 13 }}><Text style={{ fontSize: 12 }}>12th Oct, 2021 4.30-5.00 PM | Amount paid ₹ 393.6</Text></View>

                        <View style={styles.MainContainer}>

                            <Timeline data={data}
                                style={{ paddingTop: 13 }}
                                showTime={false}
                                innerCircle={'icon'}
                                circleColor='white'
                                lineColor='#C4C4C4'
                                eventContainerStyle={{ width: 10 }}

                            />

                            <View style={{
                                alignSelf: 'stretch',
                                borderBottomWidth: 1,
                                borderBottomColor: '#E5E6E9',
                                marginTop: 10,
                                marginBottom: 10
                            }} />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ paddingRight: 5 }}>
                                        <View style={{ width: 12, height: 12, backgroundColor: '#4285F4', borderRadius: 6, paddingRight: 3 }} />
                                    </View>
                                    <View><Text style={{ color: '#4285F4' }}>In Progress</Text></View>
                                </View>
                                <View style={{ height: 35, width: 100, backgroundColor: '#F04E23', borderRadius: 4 }}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('track_order',{is_delivered:false})}>
                                        <Text style={{ textAlign: 'center', textAlignVertical: 'center', lineHeight: 35, color: 'white' }}>Track Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </View>
                </View>
                <View style={{}}>
                    <View style={{ backgroundColor: '#E5E5E5', height: 50, paddingLeft:10 }}>
                        <Text style={{ lineHeight: 50 }}>Completed Orders</Text>
                    </View>
                    {MyList.map((items, i) => {
                        return (
                            <View key={i} style={{marginBottom:10}} >
                                <View style={[styles.MainContainer, { flex: 1, backgroundColor: 'white' }]}>
                                    <View>
                                        <View style={{ paddingTop: 13 }}><Text style={{ fontSize: 24 }}>Order id #19919293</Text></View>
                                        <View style={{ paddingTop: 13 }}><Text style={{ fontSize: 12 }}>12th Oct, 2021 4.30-5.00 PM | Amount paid ₹ 393.6</Text></View>
                                    </View>
                                    <View style={{
                                        alignSelf: 'stretch',
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#E5E6E9',
                                        marginTop: 10,
                                        marginBottom: 10
                                    }} />

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ paddingRight: 5 }}>
                                                <Tick />
                                            </View>
                                            <View><Text style={{ color: '#24AF8E' }}>Delivered</Text></View>
                                        </View>
                                        <View style={{ height: 35, width: 100, backgroundColor: '#F04E23', borderRadius: 4 }}>
                                            <TouchableOpacity onPress={()=>navigation.navigate('track_order',{is_delivered:true})}>
                                                <Text style={{ textAlign: 'center', textAlignVertical: 'center', lineHeight: 35, color: 'white' }}>Reorder</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>


                                </View>
                                {/* <View style={{  mar:4 }}>

                                </View> */}
                            </View>

                        )
                    })}


                </View>

            </ScrollView>
        </View>

    )
}

export default MyOrders


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        //   alignItems: 'center',
        //   justifyContent: 'center',
        padding: 10
    },

    text: {
        fontSize: 3,
        //   textAlign: 'center',
        color: '#000000a0',
        fontWeight: 'bold',
    },
    touch: {
        alignItems: 'center',
    },
    button: {
        borderRadius: 8,
        // paddingVertical: 14,
        paddingHorizontal: 10,
        lineHeight: 0,

        width: 120,
        // marginTop: 50,
        backgroundColor: '#f04f24',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },

});