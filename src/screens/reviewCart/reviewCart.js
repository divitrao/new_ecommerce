import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View,  SafeAreaView, Pressable, ScrollView } from "react-native";
import { useReducer,useState} from "react";
import Location_icon from '../../assets/location_icon/location.svg'
import Add from '../../assets/increment_decrement/add.svg'
import Minus from '../../assets/increment_decrement/minus.svg'
import Percent from '../../assets/percent/percent.svg'
import Right_Arrow from '../../assets/arrows/right_arrow.svg'
import categoriesStyles from '../../components/Categories/styles/categories_styles';
import { frequently_bought_item, best_offers, cart } from "../../api/data";
import {
    Select,
    VStack,
    CheckIcon,
    Center,
    NativeBaseProvider,
    extendTheme,HStack,Image,  AddIcon,
    Badge, Button
  } from "native-base"
  import styles from './styles'


const Review_Cart = ({navigation}) =>{


    let [service, setService] = useState("")
    
    
    const DELIVERY_CHARGES = 55
    const TAXES = 60.12

    

    

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

    return(
        
        
        <View style={styles.main_view}>
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
                        <View key={item.id} style={styles.item_list}>
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
            </View>
            
           

            
            <View style={styles.add_more_sign}>
                <TouchableOpacity>
                    <Text style={{fontSize:15,color:'#24AF8E'}}>
                        + Add More
                    </Text>
                </TouchableOpacity>
            </View>


            <View style={styles.percent_sign}>
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
                                <NativeBaseProvider>
                                <HStack space={6} style={styles.h_stack}>
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
                                <NativeBaseProvider>
                                <HStack space={6} style={styles.h_stack_recommendation}>
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