
import React, { useState } from 'react';
import {TouchableOpacity,View, } from 'react-native';

import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  CheckIcon,
  HStack,
  VStack,
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
import { milk_data } from '../../api/data';

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
    
  const data = milk_data

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


  const renderItem = ({ item }) => (
    <Box height="auto" backgroundColor="white" flex="1"> 
      <Pressable onPress={() => navigation.navigate('product',{navigation:navigation})} bg="white">
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
                    <VStack style={categoriesStyles.itemVStack}>
                        <View style={{flexDirection:'row',marginVertical:10}}>
                            <View style={categoriesStyles.itemView}>
                                <Text _dark={{color: "warmGray.50",}}  color="coolGray.800" bold fontSize="19">
                                <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_b.png')} />{item.discount_amount}
                                    {item.actual_amount &&
                                      <Text bold  
                                      style={categoriesStyles.itemText}>
                                          <Image resizeMode='contain' alt="currency"  source={require('../../assets/images/currency_b.png')} /> {item.actual_amount}   
                                      </Text>
                                    }

                                </Text>
                                {item.discount_perc &&
                                  <Badge bgColor="#2898FF" justifyContent="center" variant='solid' borderRadius="6" height="7" width="50" marginLeft="4" >
                                     <Text style={categoriesStyles.itemDiscount}>{item.discount_perc}</Text></Badge>
                                }

                            </View>
                            
                        </View>


                        <Text _dark={{color: "warmGray.50",}} color="coolGray.800" bold style={categoriesStyles.itemContent}>
                            {item.content}                            
                        </Text>
                        

                        {item.best_seller && 
                        
                        <View style={categoriesStyles.tagView}>
                        <Text style={categories_styles.tagText}>
                        <Image resizeMode='contain' alt="star" source={require('../../assets/images/more_ico.png')} /> 
                           <Text style={categoriesStyles.tagImageText}> BEST SELLER</Text>
                        </Text>
                        </View>
                        }
                        
                        <View style={categoriesStyles.ratingView}>
                        <Text style={categoriesStyles.ratingText} bold>
                        <Image resizeMode='contain' alt="star" source={require('../../assets/images/star.png')} /> 
                           {item.rating_perc} <Text style={categoriesStyles.ratingImageText}> {item.rating_count} Ratings</Text>
                        </Text>
                        </View>
                        
                        <View  style={categoriesStyles.dropdownView}>
                        <View style={categoriesStyles.dropdownSubView}>
                          <VStack alignItems="center" space={4}>
                          
                          <Select
                            selectedValue={item.selectedDropdownValue}
                            minWidth="89"
                            accessibilityLabel="Choose Service"
                            _selectedItem={{
                              bg: "teal.600",
                              endIcon: <CheckIcon size="5" />,
                            }}
                            style={categoriesStyles.dropdown}
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
                            style={categoriesStyles.button}
                            >
                        ADD
                        </Button>
                        
                        </View> }
                      

                        {item.cartValue > 0 &&
                        
                          <View style={categoriesStyles.buttonView}>
                          <Button style={categoriesStyles.minusButton}
                              onPress={()=>onDecrementHandler(item.id)}>
                              <MinusIcon size='3' style={categoriesStyles.minusIcon}/></Button>
                          <Input
                              value={item.cartValue.toString()}
                              showSoftInputOnFocus={false}
                              mx="0"
                              w={{
                                  base: "45%",
                              }}
                              style={{height:29,textAlign:'center'}}
                              
                              />
                          <Button  style={categoriesStyles.addButton}
                              onPress={()=>onIncrementHandler(item.id)}>
                              <AddIcon size="3" style={categoriesStyles.addIcon}/></Button>
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
      <View style={categoriesStyles.cartView}>
            <View style={categoriesStyles.navBar}>
               <View style={categoriesStyles.leftContainer}>
                   <Text style={categoriesStyles.cartText}>
                     {cartValue} item |
                   <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_w.png')} />601   
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

