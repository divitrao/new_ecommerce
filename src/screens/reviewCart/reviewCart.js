import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View, StyleSheet, SafeAreaView, Pressable, ScrollView } from "react-native";
import { useReducer,useState} from "react";
import Location_icon from '../../assets/location_icon/location.svg'
import Atta from '../../assets/cart_product/atta.svg'
import Coconut from '../../assets/cart_product/coconut.svg'
import Milk from '../../assets/cart_product/milk.svg'
import Add from '../../assets/increment_decrement/add.svg'
import Minus from '../../assets/increment_decrement/minus.svg'
import Percent from '../../assets/percent/percent.svg'
import Right_Arrow from '../../assets/arrows/right_arrow.svg'
import categoriesStyles from '../../components/Categories/styles/categories_styles';
import {
    Select,
    VStack,
    CheckIcon,
    Center,
    NativeBaseProvider,
    extendTheme,HStack,Image,  AddIcon,
    MinusIcon,
    Input, Badge, Button
  } from "native-base"

const Review_Cart = ({navigation}) =>{


    let [service, setService] = useState("")
    
    
    const DELIVERY_CHARGES = 55
    const TAXES = 60.12

    const cart = [
        {
            id:1,
            item_name:'Nandini Tonned Milk',
            quantity:1,
            original_price:19,
            discounted_price:19,
            per_quantity:3,
            measurement_unit:'litre',
            picture:<Milk />,
            disable:false
        },
        {
            id:2,
            item_name:'Ashirwaad select atta',
            quantity:1,
            original_price:3315,
            discounted_price:2293,
            per_quantity:20,
            measurement_unit:'weight',
            picture:<Atta />,
            disable:false
        },
        {
            id:3,
            item_name:'coconut',
            quantity:1,
            original_price:50,
            discounted_price:40,
            per_quantity:2,
            measurement_unit:'piece',
            picture:<Coconut />,
            disable:false
        },
        {
            id:4,
            item_name:'coconut',
            quantity:1,
            original_price:50,
            discounted_price:40,
            per_quantity:2,
            measurement_unit:'piece',
            picture:<Coconut />,
            disable:false
        },
        {
            id:5,
            item_name:'coconut',
            quantity:1,
            original_price:50,
            discounted_price:40,
            per_quantity:2,
            measurement_unit:'piece',
            picture:<Coconut />,
            disable:false
        },
        {
            id:6,
            item_name:'Nandini Tonned Milk',
            quantity:1,
            original_price:19,
            discounted_price:19,
            per_quantity:3,
            measurement_unit:'litre',
            picture:<Milk />,
            disable:false
        },
    ]
    
    

    const frequently_bought_item = [
        {
            id:1,
            image: require('../../assets/images/image_2.png'),
            content: 'Aashirvaad Superior MP Wheat Atta',
            colors:'#53B175',
            actual_amount: 109,
            discount_amount: 98,
            discount_perc: '10%',
            quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
            rating_perc: 4.3,
            rating_count: 62191,
            is_vegan: true,
            selectedDropdownValue: '1 kg',
            cartValue: 0,
        },
        {
            id:2,
            image: require('../../assets/images/image_2.png'),
            content: 'Aashirvaad Superior MP Wheat Atta',
            colors:'#53B175',
            actual_amount: 109,
            discount_amount: 98,
            discount_perc: '10%',
            quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
            rating_perc: 4.3,
            rating_count: 62191,
            is_vegan: true,
            selectedDropdownValue: '1 kg',
            cartValue: 0,
        },
        {
            id:3,
            image: require('../../assets/images/image_2.png'),
            content: 'Aashirvaad Superior MP Wheat Atta',
            colors:'#53B175',
            actual_amount: 109,
            discount_amount: 98,
            discount_perc: '10%',
            quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
            rating_perc: 4.3,
            rating_count: 62191,
            is_vegan: true,
            selectedDropdownValue: '1 kg',
            cartValue: 0,
        },
    ]

    const best_offers = [
        {
            id:1,
            image: require('../../assets/images/image_2.png'),
            content: 'Aashirvaad Superior MP Wheat Atta',
            colors:'#53B175',
            actual_amount: 109,
            discount_amount: 98,
            discount_perc: '10%',
            quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
            rating_perc: 4.3,
            rating_count: 62191,
            is_vegan: true,
            selectedDropdownValue: '1 kg',
            cartValue: 0,
        },
        {
            id:2,
            image: require('../../assets/images/image_2.png'),
            content: 'Aashirvaad Superior MP Wheat Atta',
            colors:'#53B175',
            actual_amount: 109,
            discount_amount: 98,
            discount_perc: '10%',
            quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
            rating_perc: 4.3,
            rating_count: 62191,
            is_vegan: true,
            selectedDropdownValue: '1 kg',
            cartValue: 0,
        },
        {
            id:3,
            image: require('../../assets/images/image_2.png'),
            content: 'Aashirvaad Superior MP Wheat Atta',
            colors:'#53B175',
            actual_amount: 109,
            discount_amount: 98,
            discount_perc: '10%',
            quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
            rating_perc: 4.3,
            rating_count: 62191,
            is_vegan: true,
            selectedDropdownValue: '1 kg',
            cartValue: 0,
        },
    ]

    

    const DefaultState = {
        item:cart
    }

    const reducer = (state,action)=>{
        if(action.type==='INCREMENT'){
            let disabled
            const updated_cart = state.item.map((CurrElem)=>{
                if(CurrElem.id===action.payload){
                    if(CurrElem.quantity>1){
                        disabled=false
                    }
                    else{
                        disabled=true
                    }
                   
                    return{...CurrElem,quantity:CurrElem.quantity + 1,disable:disabled}
                }
                return CurrElem
            })

            return {...state,item:updated_cart}
            
        }
        if(action.type==='DECREMENT'){
            let disabled
            const updated_cart = state.item.map((CurrElem)=>{
                if(CurrElem.id===action.payload){
                    // console.log(CurrElem.quantity)
                    if(CurrElem.quantity==1){
                        disabled = true
                    }
                    else{
                        disabled = false
                    }
                    
                    return{...CurrElem,quantity:CurrElem.quantity-1,disable:disabled}
                }
                return CurrElem
            })

            return {...state,item:updated_cart}
        }

        return state

    }
    let [state, dispatch] = useReducer(reducer,DefaultState)

    const increment = (id)=>{
        // console.log('incree',id)
        dispatch({
            type:'INCREMENT',
            payload:id
        })
    }

    const decrement = (id)=>{
        dispatch({
            type:'DECREMENT',
            payload:id
        })

    }

    useEffect(()=>{

    },[state])

    let Total_Price = (items)=>{
        let price = 0
        for(let i=0;i<cart.length;i++){
            price = price + items[i]['discounted_price']*items[i]['quantity']
           
        }
        return(
            price 
        )
    }

    // const total_price = Total_Price()
   

    return(
        
        
        <View style={{paddingLeft:5,paddingRight:5,flex:1,backgroundColor:'white'}}>
            <SafeAreaView style={{flex:1}} >
            <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <View>
                    <Location_icon />
                </View>
                <View style={{paddingLeft:3}}>
                    <View>
                        <Text style={{color:'grey',fontSize:12}}>Delivery to</Text>
                    </View>
                    <View>
                        <Text>Home- 501, Sai Nidhi Residency, 27th....</Text>
                    </View>
                </View>
                </View>
                <View >
                    <TouchableOpacity>
                <Text style={{color:'#F04E23'}}>Change</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={{fontSize:12,paddingTop:8}}>Shipment of 2 items from SuperMart - HSR Layout </Text>
            </View>
            
            <View>
                {state.item.map((item)=>{
                    return(
                        <View key={item.id} style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingTop:10}}>
                            <View>
                                {item.picture}
                            </View>
                            <View style={{width:100}}>
                                <View>
                                    <Text style={{fontSize:15}} numberOfLines={1}>{item.item_name}</Text>
                                </View>
                                <View>
                                    {item.measurement_unit=='litre' && <Text style={styles.quantity_bought}>{item.per_quantity} L </Text>}
                                    {item.measurement_unit=='weight' && <Text style={styles.quantity_bought}>{item.per_quantity} kg </Text>}
                                    {item.measurement_unit=='piece' && <Text style={styles.quantity_bought}>{item.per_quantity} piece </Text>}
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Pressable disabled={item.disable} onPress={()=>decrement(item.id)}><View style={styles.button_decrement}><Text><Minus /></Text></View></Pressable>
                                <View style={styles.quantity}><Text style={{textAlign:'center'}}>{item.quantity}</Text></View>
                                <Pressable  onPress={()=>increment(item.id)}><View style={styles.button_increment}><Add/></View></Pressable>
                            </View>
                            <View style={{width:60}}>
                                <View>
                                <Text style={{fontSize:20, textAlign:'right'}}>₹{item.discounted_price*item.quantity}</Text>
                                </View>
                                { item.discounted_price!=item.original_price && <View>
                                    <Text style={{textDecorationLine:'line-through',textAlign:'right',color:'grey'}}>₹{item.original_price*item.quantity}</Text>
                                </View>  }
                            </View>
                        </View>
                    )
                })}
                {/* <FlatList
                data={state.item}
                renderItem={({item})=>{
                    
                    return(
                        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingTop:10}}>
                            <View>
                                {item.picture}
                            </View>
                            <View style={{width:100}}>
                                <View>
                                    <Text style={{fontSize:15}} numberOfLines={1}>{item.item_name}</Text>
                                </View>
                                <View>
                                    {item.measurement_unit=='litre' && <Text style={styles.quantity_bought}>{item.per_quantity} L </Text>}
                                    {item.measurement_unit=='weight' && <Text style={styles.quantity_bought}>{item.per_quantity} kg </Text>}
                                    {item.measurement_unit=='piece' && <Text style={styles.quantity_bought}>{item.per_quantity} piece </Text>}
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Pressable disabled={item.disable} onPress={()=>decrement(item.id)}><View style={styles.button_decrement}><Text><Minus /></Text></View></Pressable>
                                <View style={styles.quantity}><Text style={{textAlign:'center'}}>{item.quantity}</Text></View>
                                <Pressable  onPress={()=>increment(item.id)}><View style={styles.button_increment}><Add/></View></Pressable>
                            </View>
                            <View style={{width:60}}>
                                <View>
                                <Text style={{fontSize:20, textAlign:'right'}}>₹{item.discounted_price*item.quantity}</Text>
                                </View>
                                { item.discounted_price!=item.original_price && <View>
                                    <Text style={{textDecorationLine:'line-through',textAlign:'right',color:'grey'}}>₹{item.original_price*item.quantity}</Text>
                                </View>  }
                            </View>
                        </View>
                    )
                }}
                /> */}
            </View>
            
           

            
            <View style={{flexDirection:'row-reverse',marginTop:10,backgroundColor:'rgba(229, 229, 229,0.4)',height:50,alignItems:'center'}}>
                <TouchableOpacity>
                    <Text style={{fontSize:15,color:'#24AF8E'}}>
                        + Add More
                    </Text>
                </TouchableOpacity>
            </View>


            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:19}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View>
                        <Percent />
                    </View>
                    <View style={{marginLeft:4}}>
                        <Text style={{fontSize:16}}>
                            Avail offers and discount
                        </Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                    <Text  style={{fontSize:16,color:'#5D5FEF'}}>
                        Apply Coupon
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            

            <View style={{flex:1,marginTop:15}}>
                
                <View>
                    <View>
                        <Text style={styles.box_title}>Frequently bought together</Text>
                    </View>
                    <View>
                        <FlatList 
                        data={frequently_bought_item}
                        renderItem={({item})=>{
                            return(
                                // <View style={styles.boxes}>
                                //     <Text>{item.id}</Text>
                                // </View>
                                <NativeBaseProvider>
                                <HStack space={6} style={{paddingHorizontal:10,borderWidth:1,justifyContent:'space-around',marginHorizontal:6,borderRadius:5,borderColor:'#E2E2E2'}}>
                <Image source={item.image} style={categoriesStyles.image} alt="Image description"/>
                    <VStack style={{width:'70%',padding:5}}>
                        <View style={{flexDirection:'row',}}>
                            <View style={[{flex:1,flexDirection:'row',width:1}]}>
                                <Text _dark={{color: "warmGray.50",}}  color="coolGray.800" bold style={{fontSize:19}}>
                                <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_b.png')} />{item.discount_amount}
                                    <Text bold  
                                    style={{textDecorationLine:'line-through',fontSize:16,color:'#9A9A9A'}}>
                                        <Image resizeMode='contain' alt="currency"  source={require('../../assets/images/currency_b.png')} /> {item.actual_amount}   
                                    </Text>

                                </Text>
                                  <Badge bgColor="#2898FF" justifyContent="center" variant='solid' borderRadius="6" height="7" width="50" marginLeft="4" >
                                     <Text style={{fontWeight:'bold',color:'white'}}>{item.discount_perc}</Text></Badge>
                            </View>
                            
                        </View>


                        <Text _dark={{color: "warmGray.50",}} color="coolGray.800" bold style={{width:200,fontSize:15,color:'#9A9A9A',}}>
                            {item.content}                            
                        </Text>
                        
                        {item.is_vegan && <View style={{marginVertical:10,height:10}}>
                            <Image resizeMode='contain' alt="vegan"  source={require('../../assets/images/vegan.png')}
                            style={{height:20,width:50}} /> 
                        </View>}
                        
                        
                        
                        <View  style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={[{flex:1,flexDirection:'row',width:1,}]}>

                        <VStack alignItems="center" space={4}>
                        
                        {/* <Select
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
                          
                        </Select> */}
                      </VStack>
                         
                        </View>
                      
                        <View style={{flex:1,alignItems:'flex-end'}}>
                       <Button
                            rightIcon={<AddIcon size="4" />}
                            bgColor="#F04E23"
                           
                            style={{width:'65%',justifyContent:'space-around'}}
                            >
                        ADD
                        </Button>
                        
                        </View> 
                      

                       
                        
                

                        </View>
                 

                         
                    </VStack>
                    </HStack>
                    </NativeBaseProvider>
                            )
                        }}
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        
                        />
                    </View>
                </View>


                <View>
                    <View>
                        <Text style={styles.box_title}>Best Offers for You</Text>
                    </View>
                    <View>
                        <FlatList 
                        data={best_offers}
                        renderItem={({item})=>{
                            return(
                                // <View style={styles.boxes}>
                                //     <Text>{item.id}</Text>
                                // </View>
                                <NativeBaseProvider>
                                <HStack space={6} style={{paddingHorizontal:10,borderWidth:1,justifyContent:'space-around',marginHorizontal:6,borderRadius:5,borderColor:'#E2E2E2'}}>
                <Image source={item.image} style={categoriesStyles.image} alt="Image description"/>
                    <VStack style={{width:'70%',padding:5}}>
                        <View style={{flexDirection:'row',}}>
                            <View style={[{flex:1,flexDirection:'row',width:1}]}>
                                <Text _dark={{color: "warmGray.50",}}  color="coolGray.800" bold style={{fontSize:19}}>
                                <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_b.png')} />{item.discount_amount}
                                    <Text bold  
                                    style={{textDecorationLine:'line-through',fontSize:16,color:'#9A9A9A'}}>
                                        <Image resizeMode='contain' alt="currency"  source={require('../../assets/images/currency_b.png')} /> {item.actual_amount}   
                                    </Text>

                                </Text>
                                  <Badge bgColor="#2898FF" justifyContent="center" variant='solid' borderRadius="6" height="7" width="50" marginLeft="4" >
                                     <Text style={{fontWeight:'bold',color:'white'}}>{item.discount_perc}</Text></Badge>
                            </View>
                            
                        </View>


                        <Text _dark={{color: "warmGray.50",}} color="coolGray.800" bold style={{width:200,fontSize:15,color:'#9A9A9A',}}>
                            {item.content}                            
                        </Text>
                        
                        {item.is_vegan && <View style={{marginVertical:10,height:10}}>
                            <Image resizeMode='contain' alt="vegan"  source={require('../../assets/images/vegan.png')}
                            style={{height:20,width:50}} /> 
                        </View>}
                        
                        
                        
                        <View  style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={[{flex:1,flexDirection:'row',width:1,}]}>

                        <VStack alignItems="center" space={4}>
                        
                        {/* <Select
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
                          
                        </Select> */}
                      </VStack>
                         
                        </View>
                      
                        <View style={{flex:1,alignItems:'flex-end'}}>
                       <Button
                            rightIcon={<AddIcon size="4" />}
                            bgColor="#F04E23"
                           
                            style={{width:'65%',justifyContent:'space-around'}}
                            >
                        ADD
                        </Button>
                        
                        </View> 
                      

                       
                        
                

                        </View>
                 

                         
                    </VStack>
                    </HStack>
                    </NativeBaseProvider>
                            )
                        }}
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        
                        />
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={styles.box_title}>Best Offers for You</Text>
                    </View>
                    <View>
                        <FlatList 
                        
                        data={best_offers}
                        renderItem={({item})=>{
                            return(
                                // <View style={styles.boxes}>
                                //     <Text>{item.id}</Text>
                                // </View>
                                <NativeBaseProvider>
                                <HStack space={6} style={{paddingHorizontal:10,borderWidth:1,justifyContent:'space-around',marginHorizontal:6,borderRadius:5,borderColor:'#E2E2E2'}}>
                <Image source={item.image} style={categoriesStyles.image} alt="Image description"/>
                    <VStack style={{width:'70%',padding:5}}>
                        <View style={{flexDirection:'row',}}>
                            <View style={[{flex:1,flexDirection:'row',width:1}]}>
                                <Text _dark={{color: "warmGray.50",}}  color="coolGray.800" bold style={{fontSize:19}}>
                                <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_b.png')} />{item.discount_amount}
                                    <Text bold  
                                    style={{textDecorationLine:'line-through',fontSize:16,color:'#9A9A9A'}}>
                                        <Image resizeMode='contain' alt="currency"  source={require('../../assets/images/currency_b.png')} /> {item.actual_amount}   
                                    </Text>

                                </Text>
                                  <Badge bgColor="#2898FF" justifyContent="center" variant='solid' borderRadius="6" height="7" width="50" marginLeft="4" >
                                     <Text style={{fontWeight:'bold',color:'white'}}>{item.discount_perc}</Text></Badge>
                            </View>
                            
                        </View>


                        <Text _dark={{color: "warmGray.50",}} color="coolGray.800" bold style={{width:200,fontSize:15,color:'#9A9A9A',}}>
                            {item.content}                            
                        </Text>
                        
                        {item.is_vegan && <View style={{marginVertical:10,height:10}}>
                            <Image resizeMode='contain' alt="vegan"  source={require('../../assets/images/vegan.png')}
                            style={{height:20,width:50}} /> 
                        </View>}
                        
                        
                        
                        <View  style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={[{flex:1,flexDirection:'row',width:1,}]}>

                        <VStack alignItems="center" space={4}>
                        
                        {/* <Select
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
                          
                        </Select> */}
                      </VStack>
                         
                        </View>
                      
                        <View style={{flex:1,alignItems:'flex-end'}}>
                       <Button
                            rightIcon={<AddIcon size="4" />}
                            bgColor="#F04E23"
                           
                            style={{width:'65%',justifyContent:'space-around'}}
                            >
                        ADD
                        </Button>
                        
                        </View> 
                      

                       
                        
                

                        </View>
                 

                         
                    </VStack>
                    </HStack>
                    </NativeBaseProvider>
                            )
                        }}
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        
                        />
                    </View>
                </View>
            
            </View>
            <View style={{marginTop:15,marginBottom:35,backgroundColor:'rgba(240, 78, 35,.02)'}}>
                    <View style={styles.summary}>
                        <View>
                            <Text>Item Total</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold',fontSize:16}}>₹ {Total_Price(state.item)}</Text>
                        </View>    
                    </View>

                    <View style={styles.summary}>
                        <View>
                            <Text style={{textDecorationLine:'underline',color:'grey'}}>TAXES</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold',fontSize:16}}>₹ {TAXES}</Text>
                        </View>    
                    </View>

                    <View style={styles.summary}>
                        <View>
                            <Text style={{textDecorationLine:'underline',color:'grey'}}>Delivery Charges</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold',fontSize:16}}>₹ {DELIVERY_CHARGES}</Text>
                        </View>    
                    </View>

                    <View style={styles.summary}>
                        <View>
                            <Text>Total Cost</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold',fontSize:20}}>₹ {Total_Price(state.item) + TAXES   + DELIVERY_CHARGES}</Text>
                        </View>    
                    </View>
            </View>
            </ScrollView>
            </SafeAreaView>
            <View style={{height:60,flexDirection:'row',justifyContent:'space-around',alignItems:'center',elevation:2}}>
                <View style={{backgroundColor:'rgba(36, 175, 142,0.1)',height:50,width:125,alignItems:'stretch',borderRadius:6}}>
                    <View >
                        <Text>Delivery slot</Text>
                    </View>
                    <View style={{height:20}}>
                       <NativeBaseProvider>
                    
                        <Center flex={1} px="3">
                        <VStack  space={4}>
                        
                            <Select
                            height='8'
                            width='105'
                            variant='unstyled'
                                selectedValue={service}
                                
                                accessibilityLabel="Choose Service"
                                placeholder="Choose Service"
                                _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />,
                                }}
                                mt={1}
                                onValueChange={(itemValue) => setService(itemValue)}
                            >
                                <Select.Item label="16:00-17:00" value="ux" />
                                <Select.Item label="16:30-16:00" value="web" />
                                <Select.Item label="15:00-16:00" value="cross" />
                                <Select.Item label="9:00-9:30" value="ui" />
                                <Select.Item label="11:00-12:30" value="backend" />
                            </Select>
                        </VStack>
                        </Center>
                        </NativeBaseProvider>
                    
                    </View>
                </View>
                <View style={{flexDirection:'row',backgroundColor:'#F04E23',height:50,alignItems:'center',width:210,justifyContent:'space-around',borderRadius:6}}>
                    <View>
                        <Text style={{color:'white',fontWeight:'bold'}}>₹ {Total_Price(state.item)+ TAXES + DELIVERY_CHARGES}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('payment_option')}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        
                        <View>
                            <Text style={{color:'white',fontWeight:'bold'}}>Proceed to Pay</Text>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Right_Arrow />
                        </View>
                        
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    )
}
export default Review_Cart


const styles = StyleSheet.create({
    button_decrement:{
        height:25,
        width:25,
        borderWidth:1,
        borderTopLeftRadius:6,
        borderBottomLeftRadius:6,
        alignItems:'center',
        paddingTop:10,
        borderColor:'rgba(240, 78, 35,0.2)'
        
        
    },
    button_increment:{
        height:25,
        width:25,
        borderWidth:1,
        borderBottomRightRadius:6,
        borderTopRightRadius:6,
        alignItems:'center',
        paddingTop:7,
        borderColor:'rgba(240, 78, 35,0.2)'

    },
    quantity:{
        width:26,
        height:25,
        borderWidth:1,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderColor:'rgba(240, 78, 35,0.2)'
    },
    quantity_bought:{

        color:'grey',
        fontSize:12,
        

    },
    boxes:{
        width:214,
        height:101,
        borderWidth:1,
        borderRadius:6,
        borderColor:'#E2E2E2',
        marginRight:15
    },
    box_title:{
        fontSize:18,
        paddingTop:5,
        paddingBottom:10
    },
    summary:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
        alignItems:'center'
    }
})

const theme = extendTheme({
    components:{
        Select:{
            baseStyle:{
                customDropdownIconProps:{
                    size:5
                }
            },
            defaultProps:{},
            variants:{},
            sizes:{}
        }
    }
})