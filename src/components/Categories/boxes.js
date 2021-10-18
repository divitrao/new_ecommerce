
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';





export default function Boxes() {

    const [selectedLanguage, setSelectedLanguage] = useState();

    const food_data = [
        {
            id:1,
            image: require('../../assets/images/apple.png'),
            content:'Red Apple',
            colors:'#53B175',
            amount: '240',
            quantity:['1kg','2kg']
        },
        {
            id:2,
            image: require('../../assets/images/banana.png'),
            content: 'Banana',
            colors:'#53B175',
            amount: '240',
            quantity:['1kg','2kg']
        },
        {
            id:3,
            image: require('../../assets/images/capcicum.png'),
            content:'Capcicum Red',
            colors:'#53B175',
            amount: '140',
            quantity:['1kg','2kg']
        },
        {
            id:4,
            image: require('../../assets/images/ginger.png'),
            content:'Ginger',
            colors:'#53B175',
            amount: '240',
            quantity:['1kg','2kg']
        },
        
    ]

    return (

        <View style={{flex:1,backgroundColor:'white',padding:10}}>
      
        <FlatList 
            columnWrapperStyle={{justifyContent:'space-between'}}
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
                        <Picker style={styles.picker} >
                            <Picker.Item label="1 Kg" />
                            <Picker.Item label="2 Kg" />
                        </Picker>

                        <View style={[styles.amount],{flexDirection: 'row',alignItems:'baseline',paddingHorizontal:9}}>
                            <Text style={{fontSize: 17, fontWeight: 'bold',}}>
                                {/* <Icon name="rupee" size={15} style={{letterSpacing:10}}/> */}
                                <Image resizeMode='contain'  source={require('../../assets/images/currency_b.png')} />
                            {item.amount}
                            </Text>
                            <View
                            style={{
                                height: 25,
                                width: 65,
                                backgroundColor: "#F04E23",
                                borderRadius: 5,
                                marginLeft: 45,
                                alignItems: 'center',
                                justifyContent: 'space-around',
                            }}>
                            <Text
                                style={{fontSize: 17, color: 'white',fontWeight:'400',}}>ADD 
                                +
                            </Text>
                            </View>
                        </View>
                    </View>
                </View>
                )
            }}
        />
        <View style={styles.navBar}>
            <View style={styles.leftContainer}>
                <Text style={[styles.text, {textAlign: 'left',color:'white',fontSize:18,textAlignVertical:'center'}]}>1 item |<Image resizeMode='contain'  source={require('../../assets/images/currency_w.png')} />601   
                {/* <Icon name="rupee" size={20} style={{letterSpacing:10}}/> */}
                <Image resizeMode='contain'  source={require('../../assets/images/currency_w.png')} />
                <Text style={{textDecorationLine:'line-through'}}>827</Text></Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={{color:'white',fontSize:18}}>View Cart <Image resizeMode='contain' source={require('../../assets/images/cart.png')} /></Text>
            </View>
        </View>

    </View>
    );
}
const styles = StyleSheet.create({
    
    flatbox:{
        flex:1,
        
        backgroundColor:'white',
        borderRadius:4,
    },  

    picker: {
        width: '67%',
        color: "#F04E23",
    },

    // content:{
    //     paddingLeft: 8,        
        
    // },

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
        flexDirection: 'row',
        height:55
    },
    
    content_text:{
        paddingTop: 15,        
        paddingLeft: 15,
        flexDirection: 'row'
    },

    amount:{
        paddingLeft: 12,
        flexDirection: 'row',
       
    },
    addToCarBtn:{
        height:30,
        width:80,
        marginLeft: 50,
        backgroundColor: "#F04E23",
        justifyContent: 'center',
        alignItems: 'center'
    },


    box:{
      
        width:'100%',
        height: '20%',          
        padding: 20
    },
    inner:{
        color: '#fff',
        height: '50%', 
        backgroundColor: "#F04E23",
        
    },
    cartText:{
        padding: 10,
        flex:1,
        flexDirection: 'row',
    },

    navBar: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#F04E23",
        marginBottom: 50,
        padding: 10,
        borderRadius: 6,
        
      },
      leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',

      },
      rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      rightIcon: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
        backgroundColor: 'white',
      }


})


    
//   return (

//         <View style={{flex:1,backgroundColor:'white',marginRight:-15,paddingHorizontal:20}}>
//         <View  style={{flex:1}} >
//         <FlatList 
            
//             style={styles.flatbox}
//             data={food_data}
//             numColumns={2}
//             renderItem={({item})=>{
//             return(
//                 <View style={styles.content_box}>
//                     <View>
//                     <Image source={item.image}  style={styles.image} />
//                     </View>
//                     <View style={styles.content}>
//                         <Text style={styles.content_text}>{item.content}</Text>
//                         <Picker style={styles.picker} >
//                             <Picker.Item label="1 Kg" />
//                             <Picker.Item label="2 Kg" />
//                         </Picker>

//                         <View style={[styles.amount],{flexDirection: 'row',alignItems:'baseline'}}>
//                             <Text style={{fontSize: 17, fontWeight: 'bold',}}>
//                                 {/* <Icon name="rupee" size={15} style={{letterSpacing:10}}/> */}
//                                 <Image resizeMode='contain'  source={require('../../assets/images/currency_b.png')} />
//                             {item.amount}
//                             </Text>
//                             <View
//                             style={{
//                                 height: 25,
//                                 width: 65,
//                                 backgroundColor: "#F04E23",
//                                 borderRadius: 5,
//                                 marginLeft: 30,
//                                 alignItems: 'center',
//                                 justifyContent: 'space-around',
//                             }}>
//                             <Text
//                                 style={{fontSize: 17, color: 'white',fontWeight:'400',}}>ADD 
//                                 +
//                             </Text>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 )
//             }}
//         />
//         </View>
//         <View style={styles.navBar}>
//             <View style={styles.leftContainer}>
//                 <Text style={[styles.text, {textAlign: 'left',color:'white',fontSize:14,textAlignVertical:'center'}]}>1 item |<Image resizeMode='contain'  source={require('../../assets/images/currency_w.png')} />601   
//                 {/* <Icon name="rupee" size={20} style={{letterSpacing:10}}/> */}
//                 <Image resizeMode='contain'  source={require('../../assets/images/currency_w.png')} />
//                 <Text style={{color:'white',textDecorationLine:'line-through'}}>827</Text></Text>
//             </View>
//             <View style={styles.rightContainer}>
//                 <Text style={{color:'white',fontSize:17}}>View Cart <Image resizeMode='contain' source={require('../../assets/images/cart.png')} /></Text>
//             </View>
//         </View>

//     </View>
//     );
// }

// const styles = StyleSheet.create({
    
//     flatbox:{
//         flex:1,
        
//         backgroundColor:'white',
//         borderRadius:4,
//     },  

//     picker: {
//         width: '80%',
//         color: "#F04E23",
//     },

//     // content:{
//     //     paddingLeft: 8,        
        
//     // },

//     content_box:{
//         flex:1,
//         width:160,
//         height:200,
//         borderWidth:1,
//         marginHorizontal:5,
//         marginVertical:5,
//         paddingTop:23,
//         borderColor: '#E2E2E2'
//     },

//     image:{
//         marginLeft: 25,
//         marginRight: 25,    
//         flexDirection: 'row',
//         height:55
//     },
    
//     content_text:{
//         paddingTop: 15,        
//         paddingLeft: 15,
//         flexDirection: 'row'
//     },

//     amount:{
//         paddingLeft: 12,
//         flexDirection: 'row',
       
//     },
//     addToCarBtn:{
//         height:30,
//         width:80,
//         marginLeft: 50,
//         backgroundColor: "#F04E23",
//         justifyContent: 'center',
//         alignItems: 'center'
//     },


//     box:{
      
//         width:'100%',
//         height: '20%',          
//         padding: 20
//     },
//     inner:{
//         color: '#fff',
//         height: '50%', 
//         backgroundColor: "#F04E23",
        
//     },
//     cartText:{
//         padding: 10,
//         flex:1,
//         flexDirection: 'row',
//     },

//     navBar: {
       
//         height: 50,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: "#F04E23",
//         // marginBottom: 50,
//         padding: 10,
//         borderRadius: 6,
//         marginHorizontal:15,
        
//       },
//       leftContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',

//       },
//       rightContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//       },
//       rightIcon: {
//         height: 10,
//         width: 10,
//         resizeMode: 'contain',
//         backgroundColor: 'white',
//       }


// })