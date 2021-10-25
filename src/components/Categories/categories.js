
import React, { useState, useContext, createContext } from 'react';
import { Dimensions, TouchableOpacity, ViewComponent, StyleSheet, View, } from 'react-native';

import {
  NativeBaseProvider,
  Select,
  CheckIcon,
  Box,
  Text,
  Pressable,
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
  Input
} from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import categoriesStyles from './styles/categories_styles';
import { Picker } from '@react-native-picker/picker';
const MyDiv = createContext()
export default function Categories({ navigation }) {
  // console.log(navigation)
  const [mode, setMode] = useState('Basic');



  return (

    <NativeBaseProvider>
      <Basic navigation={navigation} />

    </NativeBaseProvider>

  );
}

function Basic({ navigation }) {

  // const datas = useContext(MyDiv)
  // console.log(navigation)

  const [cartValue, setCartValue] = useState(0)

  const data = [
    {
      id: 1,
      image: require('../../assets/images/image_1.png'),
      content: 'OPP Sooji 500gm Pouch',
      colors: '#53B175',
      actual_amount: 33,
      discount_amount: 19,
      discount_perc: '42%',
      quantity: [{ key: '1_1', value: '500 gm' }, { key: '1_2', value: '750 gm' }, { key: '1_3', value: '1 kg' }],
      rating_perc: 3.8,
      rating_count: 29108,
      is_vegan: false,
      selectedDropdownValue: '500 gm',
      cartValue: 0,
    },
    {
      id: 2,
      image: require('../../assets/images/image_2.png'),
      content: 'Aashirvaad Superior MP Wheat Atta',
      colors: '#53B175',
      actual_amount: 109,
      discount_amount: 98,
      discount_perc: '10%',
      quantity: [{ key: '2_1', value: '1 kg' }, { key: '2_2', value: '2 kg' }, { key: '2_3', value: '3 kg' }, { key: '2_4', value: '4 kg' }],
      rating_perc: 4.3,
      rating_count: 62191,
      is_vegan: true,
      selectedDropdownValue: '1 kg',
      cartValue: 0,
    },
    {
      id: 3,
      image: require('../../assets/images/image_3.png'),
      content: 'Aashirvaad Sharbati Select Atta',
      colors: '#53B175',
      actual_amount: 315,
      discount_amount: 293,
      discount_perc: '7%',
      quantity: [{ key: '3_1', value: '1 kg' }, { key: '3_2', value: '2 kg' }, { key: '3_3', value: '3 kg' },
      { key: '3_4', value: '4 kg' }, { key: '3_5', value: '5 kg' }, { key: '3_6', value: '6 kg' }],
      rating_perc: 3.8,
      rating_count: 29102,
      is_vegan: false,
      selectedDropdownValue: '5 kg',
      cartValue: 0,

    },

  ]

  const [listData, setListData] = useState(data);



  const onIncrementHandler = (item_id) => {

    const item_exist = listData.find((x) => x['id'] == item_id);
    var value = 0
    if (item_exist) {
      var index = listData.indexOf(item_exist)
      item_exist.cartValue = item_exist.cartValue + 1
      var filteredArray = listData.filter(function (itm) {
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

    const item_exist = listData.find((x) => x['id'] == item_id);

    if (item_exist) {
      var index = listData.indexOf(item_exist)
      item_exist.cartValue = item_exist.cartValue - 1
      var filteredArray = listData.filter(function (itm) {
        return itm.id != item_id
      });
      filteredArray.splice(index, 0, item_exist);
      setListData(filteredArray)
    }
  }

  const changeHandler = (item_id, itemValue) => {

    const item_exist = listData.find((x) => x['id'] == item_id);

    var index = listData.indexOf(item_exist)
    // console.log(index,"######")

    item_exist.selectedDropdownValue = itemValue
    var filteredArray = listData.filter(function (itm) {
      return itm.id != item_id
    });

    filteredArray.splice(index, 0, item_exist);
    setListData(filteredArray)
  }

  const renderItem = ({ item, index }) => (
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
          style={{ marginHorizontal: 6 }}
        >
          <HStack space={6} style={{ paddingHorizontal: 10 }}>
            <Image source={item.image} style={categoriesStyles.image} alt="Image description" />
            <VStack style={{ width: '70%' }}>
              <View style={{ flexDirection: 'row', }}>
                <View style={[{ flex: 1, flexDirection: 'row', width: 1 }]}>
                  <Text _dark={{ color: "warmGray.50", }} color="coolGray.800" bold style={{ fontSize: 19 }}>
                    <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_b.png')} />{item.discount_amount}
                    <Text bold
                      style={{ textDecorationLine: 'line-through', fontSize: 16, color: '#9A9A9A' }}>
                      <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_b.png')} /> {item.actual_amount}
                    </Text>

                  </Text>
                  <Badge bgColor="#2898FF" justifyContent="center" variant='solid' borderRadius="6" height="7" width="50" marginLeft="4" >
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>{item.discount_perc}</Text></Badge>
                </View>

              </View>


              <Text _dark={{ color: "warmGray.50", }} color="coolGray.800" bold style={{ width: 200, fontSize: 15, color: '#9A9A9A', }} >
                {item.content}
              </Text>

              {item.is_vegan && <View style={{ marginVertical: 10, height: 10 }}>
                <Image resizeMode='contain' alt="vegan" source={require('../../assets/images/vegan.png')}
                  style={{ height: 20, width: 50 }} />
              </View>}

              <View style={{ paddingTop: 10, }}>
                <Text style={{ color: "#24AF8E" }} bold>
                  <Image resizeMode='contain' alt="star" source={require('../../assets/images/star.png')} />
                  {item.rating_perc} <Text style={{ color: '#9A9A9A' }}> {item.rating_count} Ratings</Text>
                </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[{ flex: 1, flexDirection: 'row', width: 1, }]}>

                  <VStack alignItems="center" space={4}>

                    <Select
                      selectedValue={item.selectedDropdownValue}
                      minWidth="89"
                      accessibilityLabel="Choose Service"
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                      }}
                      style={{ height: 30 }}
                      mt={1}

                      onValueChange={(itemValue) => {

                        changeHandler(item.id, itemValue)
                      }}
                    >
                      {item.quantity && item.quantity.map(option => {
                        return (<Select.Item key={option.key} label={option["value"]} value={option.value} />);
                      })}

                    </Select>
                  </VStack>

                </View>

                {item.cartValue == 0 && <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Button
                    rightIcon={<AddIcon size="4" />}
                    bgColor="#F04E23"
                    onPress={() => onIncrementHandler(item.id)}
                    style={{ width: '65%', justifyContent: 'space-around' }}
                  >
                    ADD
                  </Button>

                </View>}


                {item.cartValue > 0 &&
                
                  <View style={[{ flex: 1, flexDirection: 'row', width: 1, height: 29, justifyContent: 'center' }]}>
                    <Button style={{ width: '23%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F04E23' }}
                      onPress={() => onDecrementHandler(item.id)}>
                      <MinusIcon size='3' style={{ flex: 1, flexDirection: 'row', color: 'white' }} /></Button>
                    <Input
                      value={item.cartValue.toString()}
                      showSoftInputOnFocus={false}
                      mx="0"
                      w={{
                        base: "45%",
                      }}
                      style={{ height: 29, textAlign: 'center' }}

                    />
                    <Button style={{ width: '23%', justifyContent: 'space-around', backgroundColor: '#F04E23' }}
                      onPress={() => onIncrementHandler(item.id)}>
                      <AddIcon size="3" style={{ flex: 1, flexDirection: 'row', color: 'white' }} /></Button>
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

          <Image source={require('../../assets/images/list.png')} alt="Image description" style={{ marginLeft: 20 }} />
          <Text fontWeight="medium" color="white" style={{ marginLeft: 20 }} >
            Add to my list
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  return (
    <Box bg="white" safeArea flex="1" style={{ marginHorizontal: 2 }}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        style={{ marginHorizontal: 1 }}
      />


      {cartValue > 0 &&
        <View style={{
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#F04E23',
          borderRadius: 5,
          height: 60
        }}>
          <View style={styles.navBar}>
            <View style={styles.leftContainer}>
              <Text style={[{ textAlign: 'left', color: 'white', fontSize: 14, textAlignVertical: 'center' }]}>
                {cartValue} item |
                <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_w.png')} />601
                {/* <Icon name="rupee" size={20} style={{letterSpacing:10}}/> */}
                <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_w.png')} />
                <Text style={{ color: 'white', textDecorationLine: 'line-through' }}>827</Text></Text>
            </View>
            <View style={styles.rightContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('review_cart')} ><Text style={{ color: 'white', fontSize: 17 }}>View Cart  <Image resizeMode='contain' source={require('../../assets/images/cart.png')} alt="cart" /></Text></TouchableOpacity>
            </View>
          </View>
        </View>
      }
    </Box>
  );
}



const styles = StyleSheet.create({
  navBar: {

    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#F04E23",
    // marginBottom: 50,
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 15,

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