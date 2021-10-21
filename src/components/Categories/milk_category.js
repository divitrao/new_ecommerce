
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, ViewComponent, StyleSheet,View, } from 'react-native';

import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  CheckIcon,
  Heading,
  IconButton,
  Icon,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Image,
  Badge,
  Button,
  AddIcon,
  MinusIcon,
  Input,
  Select,
} from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import categoriesStyles from './styles/categories_styles';
import { Picker } from '@react-native-picker/picker';

export default function Milk_Categories({navigation}) {
  const [mode, setMode] = useState('Basic');
 
  return (
    <NativeBaseProvider>
        <Basic navigation={navigation} />
        
    </NativeBaseProvider>
  );
}

function Basic({navigation}) {
    const[cartValue, setCartValue] = useState(0)   


    
    const data = [
        {
            id:1,
            image: require('../../assets/images/milk_1.png'),
            content:'Nandini Toned Milk (Polypack)',
            colors:'#53B175',
            actual_amount: null,
            discount_amount: 19,
            discount_perc: null, 
            quantity:[{key:'1',value:'500 ml'},{key:'2',value:'750 ml'},{key:'3',value:'1 lt'}],
            rating_perc: 4.3,
            rating_count: 62191,
            best_seller: true,
            selectedDropdownValue: '500 ml',
            cartValue: 0,
            
        },
        {
            id:2,
            image: require('../../assets/images/milk_2.png'),
            content: 'Nandini Shubham Pasteurised Standardized Milk (Polypack)',
            colors:'#53B175',
            actual_amount: null,
            discount_amount: 22,
            discount_perc: null,
            quantity:[{key:'1',value:'500 ml'},{key:'2',value:'1 lt'},{key:'3',value:'2 lt'}],
            rating_perc: 3.8,
            rating_count: 29102,
            best_seller: false,
            selectedDropdownValue: '500ml',
            cartValue: 0,
        },
        {
            id:3,
            image: require('../../assets/images/milk_3.png'),
            content:'Amul Taaza Toned Milk (Tetra Pak)',
            colors:'#53B175',
            actual_amount: null,
            discount_amount: 66,
            discount_perc: null,
            quantity:[{key:'1',value:'1 lt'},{key:'2',value:'2 lt'},{key:'3',value:'3 lt'}],
            rating_perc: 3.8,
            rating_count: 29102,
            best_seller: false,
            selectedDropdownValue: '1 lt',
            cartValue: 0,

        },

        {
            id:4,
            image: require('../../assets/images/milk_4.png'),
            content:'Nivea Milk Delights Precious Saffron Face Wash (Normal Skin)',
            colors:'#53B175',
            actual_amount: 185,
            discount_amount: 139,
            discount_perc: '24%',
            quantity:[{key:'1',value:'100 ml'},{key:'2',value:'200 ml'},{key:'3',value:'300 ml'}],
            rating_perc: 3.8,
            rating_count: 29102,
            best_seller: false,
            selectedDropdownValue: '100 ml',
            cartValue: 0,
        },
        
    ]

  const [listData, setListData] = useState(data);



  const onIncrementHandler = (item_id) => {

    const item_exist = listData.find((x)=> x['id'] == item_id);

    var value = 0
    if(item_exist){
      var index = listData.indexOf(item_exist)
      item_exist.cartValue = item_exist.cartValue + 1
      var filteredArray = listData.filter(function(itm){
          return itm.id != item_id
      });
      filteredArray.splice(index, 0, item_exist);
         setListData(filteredArray)
      }
      listData.map((itm) => {
        value = value + itm.cartValue
        setCartValue(value)
      })

  }


  const onDecrementHandler = (item_id) => { 
    
    const item_exist = listData.find((x)=> x['id'] == item_id);

    if(item_exist){
      var index = listData.indexOf(item_exist)
      item_exist.cartValue = item_exist.cartValue - 1
      var filteredArray = listData.filter(function(itm){
          return itm.id != item_id
      });
      filteredArray.splice(index, 0, item_exist);
         setListData(filteredArray)
      }
  }


    const changeHandler = (item_id,itemValue) => {
      
      const item_exist = listData.find((x)=> x['id'] == item_id);
     
      var index = listData.indexOf(item_exist)
      console.log(index,"######")
      
        item_exist.selectedDropdownValue = itemValue
        var filteredArray = listData.filter(function(itm){
          return itm.id != item_id
        });
        
        filteredArray.splice(index, 0, item_exist);
         setListData(filteredArray)   
    }


  const renderItem = ({ item, index }) => (
    <Box height="auto" backgroundColor="white" flex="1"> 
      <Pressable onPress={() => console.log('You touched me')} bg="white">
        <Box
            borderWidth="1"
            borderRadius="5"
            borderColor="#E2E2E2"
            pl="2"
            pr="1"
            py="2"
            marginTop="2"
            height="auto"
            style={{marginHorizontal:6}}
          >
              <HStack space={6} style={{paddingHorizontal:10}}>
                <Image source={item.image} style={categoriesStyles.image} alt="Image description"/>
                    <VStack style={{width:'70%'}}>
                        <View style={{flexDirection:'row',marginVertical:10}}>
                            <View style={[{flex:1,flexDirection:'row',width:1}]}>
                                <Text _dark={{color: "warmGray.50",}}  color="coolGray.800" bold style={{fontSize:19}}>
                                <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_b.png')} />{item.discount_amount}
                                    {item.actual_amount &&
                                      <Text bold  
                                      style={{textDecorationLine:'line-through',fontSize:16,color:'#9A9A9A'}}>
                                          <Image resizeMode='contain' alt="currency"  source={require('../../assets/images/currency_b.png')} /> {item.actual_amount}   
                                      </Text>
                                    }

                                </Text>
                                {item.discount_perc &&
                                  <Badge bgColor="#2898FF" justifyContent="center" variant='solid' borderRadius="6" height="7" width="50" marginLeft="4" >
                                     <Text style={{fontWeight:'bold',color:'white'}}>{item.discount_perc}</Text></Badge>
                                }

                            </View>
                            
                        </View>


                        <Text _dark={{color: "warmGray.50",}} color="coolGray.800" bold style={{width:200,fontSize:15,color:'#9A9A9A',}}>
                            {item.content}                            
                        </Text>
                        

                        {item.best_seller && 
                        
                        <View style={{justifyContent:'center',borderWidth:1, borderRadius:10,borderColor:'#F04E23',
                          height:25,width:100,marginTop:9}}>
                        <Text style={{color:"#24AF8E",alignItems:'center',paddingLeft:5,}}>
                        <Image resizeMode='contain' alt="star" source={require('../../assets/images/more_ico.png')} /> 
                           <Text style={{color:'#F04E23',alignItems:'center',fontSize:11}}> BEST SELLER</Text>
                        </Text>
                        </View>
                        }
                        
                        <View style={{paddingTop:10,}}>
                        <Text style={{color:"#24AF8E"}} bold>
                        <Image resizeMode='contain' alt="star" source={require('../../assets/images/star.png')} /> 
                           {item.rating_perc} <Text style={{color:'#9A9A9A'}}> {item.rating_count} Ratings</Text>
                        </Text>
                        </View>
                        
                        <View  style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={[{flex:1,flexDirection:'row',width:1,}]}>
                          <VStack alignItems="center" space={4}>
                          
                          <Select
                            selectedValue={item.selectedDropdownValue}
                            minWidth="89"
                            accessibilityLabel="Choose Service"
                            _selectedItem={{
                              bg: "teal.600",
                              endIcon: <CheckIcon size="5" />,
                            }}
                            style={{height:30}}
                            mt={1}
                            
                            onValueChange={(itemValue) => {
                          
                              changeHandler(item.id,itemValue)}}
                          > 
                            {item.quantity && item.quantity.map(option => {
                                return (<Select.Item key={option.key} label={option["value"]} value={option.value} /> );
                            })}
                            
                          </Select>
                        </VStack>
                        </View>
                    
                        {item.cartValue == 0  &&  <View style={{flex:1,alignItems:'flex-end'}}>
                       <Button
                            rightIcon={<AddIcon size="4" />}
                            bgColor="#F04E23"
                            onPress={()=>onIncrementHandler(item.id)}
                            style={{width:'65%',justifyContent:'space-around'}}
                            >
                        ADD
                        </Button>
                        
                        </View> }
                      

                        {item.cartValue > 0 &&
                        
                          <View style={[{flex:1,flexDirection:'row',width:1,height:29,justifyContent:'center'}]}>
                          <Button style={{width:'23%',justifyContent:'center',alignItems:'center', backgroundColor:'#F04E23'}}
                              onPress={()=>onDecrementHandler(item.id)}>
                              <MinusIcon size='3' style={{flex:1,flexDirection:'row',color:'white'}}/></Button>
                          <Input
                              value={item.cartValue.toString()}
                              showSoftInputOnFocus={false}
                              mx="0"
                              w={{
                                  base: "45%",
                              }}
                              style={{height:29,textAlign:'center'}}
                              
                              />
                          <Button  style={{width:'23%',justifyContent:'space-around',  backgroundColor:'#F04E23'}}
                              onPress={()=>onIncrementHandler(item.id)}>
                              <AddIcon size="3" style={{flex:1,flexDirection:'row',color:'white'}}/></Button>
                          </View>
                        }

                        </View>
                 

                         
                    </VStack>
                    </HStack>
        </Box>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="3">
      <Pressable
        w="160"
        ml="auto"
     
        bg="#24AF8E"
        justifyContent="center"
        h="100%"
        marginTop="2">
        <VStack alignItems="center" space={4}>
      
        <Image source={require('../../assets/images/list.png')} alt="Image description" style={{marginLeft:20}}/>
          <Text  fontWeight="medium" color="white" style={{marginLeft:20}} >
            Add to my list
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  return (
    <Box bg="white" safeArea flex="1" style={{marginHorizontal:2}}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        style={{marginHorizontal:1}}
      />

      {cartValue > 0 &&
      <View style={{
          position:'absolute',
          bottom:25,
          left:20,
          right:20,
          elevation:0,
          backgroundColor:'#F04E23',
          borderRadius:5,
          height:60
          }}>
            <View style={styles.navBar}>
               <View style={styles.leftContainer}>
                   <Text style={[styles.text, {textAlign: 'left',color:'white',fontSize:14,textAlignVertical:'center'}]}>
                     {cartValue} item |
                   <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_w.png')} />601   
                   {/* <Icon name="rupee" size={20} style={{letterSpacing:10}}/> */}
                   <Image resizeMode='contain' alt="currency"  source={require('../../assets/images/currency_w.png')} />
                   <Text style={{color:'white',textDecorationLine:'line-through'}}>827</Text></Text>
               </View>
               <View style={styles.rightContainer}>
                 <TouchableOpacity onPress={()=>navigation.navigate('review_cart')}>
                   <Text style={{color:'white',fontSize:17}}>View Cart  <Image resizeMode='contain' source={require('../../assets/images/cart.png')} alt="cart" /></Text>
               </TouchableOpacity>
               </View>
           </View>
      </View>
      }
    </Box>
  );
}



const styles=StyleSheet.create({
      navBar: {
       
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#F04E23",
        // marginBottom: 50,
        padding: 10,
        borderRadius: 6,
        marginHorizontal:15,
        
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