
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../assets/themes/colors';

export default function Boxes() {
  
    const food_data = [
        {
            id:1,
            image: require('../../assets/images/apple.png'),
            content:'Red Apple',
            colors:'#53B175',
            amount: '240',
        },
        {
            id:2,
            image: require('../../assets/images/banana.png'),
            content: 'Banana',
            colors:'#53B175',
            amount: '240',
            
        },
        {
            id:3,
            image: require('../../assets/images/capcicum.png'),
            content:'Capcicum Red',
            colors:'#53B175',
            amount: '140',

        },
        {
            id:4,
            image: require('../../assets/images/ginger.png'),
            content:'Ginger',
            colors:'#53B175',
            amount: '240',

        },
        
    ]


    const [selectValue, setSelectValue] = useState({})


  return (
            <FlatList 
                style={styles.flatbox}
                data={food_data}
                numColumns={2}
                renderItem={({item})=>{
                    return(
                        <View style={styles.content_box}>
                            <View>
                            <Image source={item.image}  style={styles.image} />
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.content_text}>{item.content}</Text>
                                <Picker style={styles.picker}>
                                    <Picker.Item label="1 Kg" />
                                    <Picker.Item label="2 Kg" />
                                </Picker>
                                <View style={styles.amount}>
                                    <Text>
                                        <Icon name="rupee" size={13} style={{letterSpacing:10}}/>
                                        <Text >{item.amount}</Text>
                                    </Text>
                                    <View style={styles.addToCarBtn}>
                                        <Text>Add</Text>
                                    <Icon  name="plus" size={10} color={'white'} />
                                    </View>
                                    
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
    // <View style={styles.container}>
    //     <View style={styles.box}>
    //         <View style={styles.inner}>
    //             <View >
    //                 <Image  style={styles.image} resizeMode='contain' source={require('../../assets/images/apple.png')} />
    //             </View>
    //             <Text style={styles.textTitle}>Red Apple</Text>
    //             <Text style={styles.textSubtitle}>1 Kg</Text>
    //             <Picker style={{width:'100%'}}>
    //                 <Picker.Item label="spanish" />
    //                 <Picker.Item label="english" />
    //             </Picker>
    //         </View>   
    //     </View>

    //     <View style={styles.box}>
    //         <View style={styles.inner}>

    //             <Text >Box 2</Text>
    //         </View>   
    //     </View>
    //     <View style={styles.box}>
    //         <View style={styles.inner}>
    //             <Text>Box 3</Text>
    //         </View>   
    //     </View>
    //             <View style={styles.box}>
    //         <View style={styles.inner}>
    //             <Text>Box 4</Text>
    //         </View>   
    //     </View>


    // </View>
  );
}

const styles = StyleSheet.create({
    
    flatbox:{
        flex:1,
        padding: 15,   
        backgroundColor:'white',
        borderRadius:4,
    },  

    picker: {
        width: '60%',
        color: "#F04E23",
    },

    content:{
        paddingLeft: 8,        
        
    },

    content_box:{
        flex:1,
        width:160,
        height:200,
        borderWidth:1,
        marginHorizontal:5,
        marginVertical:5,
        paddingTop:23,
        borderColor: '#E2E2E2'
    },

    image:{
        marginLeft: 25,
        marginRight: 25,    
        flexDirection: 'row'
    },
    
    content_text:{
        paddingTop: 15,        
        paddingLeft: 8,
        flexDirection: 'row'
    },

    amount:{
        paddingLeft: 2,
        flexDirection: 'row'
    },
    addToCarBtn:{
        height:30,
        width:80,
        marginLeft: 50,
        backgroundColor: "#F04E23",
        justifyContent: 'center',
        alignItems: 'center'
    }
    // subtext: {
    //     paddingLeft: 15,
    //     justifyContent: 'space-between',
    // },

    // button:{
    //     flex: 1,
    //     width:'100%',
        
    // }

    

    // container:{
    //     flex:1,
    //     width:'100%',
    //     height:'25%',
    //     padding: 5,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    // },
    // box:{
    //     width: '50%',
    //     height: '30%',
    //     padding: 5,
    //     borderColor: 'red',
    //     borderRadius: 4,
    //     borderStyle: 'solid'
    // },
    // inner: {
    //     flex: 1,
    //     padding: 15,
    // },
    // textTitle:{
    //     marginTop: 20
    // },
    // textSubtitle:{
    //     marginTop: 5,
    //     color: '#F04E23',
    // },

})