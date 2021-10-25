
import React, {useState} from "react"
import { HStack, Stack, Center, NativeBaseProvider, View, Divider, Text, Container, Heading, 
    ScrollView, VStack,Flex, Button, AddIcon, Accordion, Box, Pressable, Badge,Select,FlatList, CheckIcon} from "native-base"
    import {Image} from 'react-native'
import { backgroundColor, borderWidth, height, marginTop } from "styled-system"
// import My_List_Icon from '../../assets/images/my_list.svg'


const Header=()=> {
  return (
    <Stack space={2} style={{marginVertical:5}}>
        
      <HStack space={3} alignItems="center"  style={{marginHorizontal:20}}>

      <Center
          size={16}
          bg="#E7E7E7"
        
          shadow={3}
        >
         
          </Center>
        <Center
          size={16}
          bg="#E7E7E7"
         
          shadow={3}
        >
        
        </Center>
        <Center
          bg="#E7E7E7"
          size={16}
        
          shadow={3}
        >
        
        </Center>
      </HStack>
    </Stack>

  )
}


const BodyComponent=()=>{
    const [index, setIndex] = useState({key:0,value:0});
    
    return (
      
        <View>  
        <Center mt="1"  style={{marginHorizontal:20}} >
          <VStack space={3.5} w="100%">
            
            <Heading size="md">Potato (Loose)</Heading>
  
            <Flex direction="row">
                <View  flex="1" flexDirection="row" alignItems="center" >
                    <View flex="1" >
                        <Text fontSize="lg" color="#7C7C7C">Price: 
                               <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_b.png')} />128  <Text bold  style={{textDecorationLine:'line-through',fontSize:16,color:'#9A9A9A'}}><Image resizeMode='contain' alt="currency"  source={require('../../assets/images/currency_b.png')} />140 
                            </Text>
                        </Text>
                    </View>

                    <View flex="1" alignItems="flex-end">
                        <Button size="md" bgColor="#F04E23" rightIcon={<AddIcon size={4}/> } justifyContent="space-around">
                            ADD
                        </Button>
                    </View>
                </View>
            </Flex>

            <Text fontSize="lg" color="#7C7C7C">Unit:</Text> 
            <Flex direction="row" >
            <Stack space={2}>
                <HStack space={3} borderRadius="4">
                
                <Button  onPress={() => setIndex({key:1,value:1})} backgroundColor="white"  borderColor={index.key === 1 && index.value === 1 ? '#F04E23' : '#B8B8B8' } borderWidth="1" width="25%" _text={{color:'black', fontSize:15}}> 5 Kg</Button>
                <Button  onPress={() => setIndex({key:2,value:1})} backgroundColor="white"  borderColor={index.key === 2 && index.value === 1 ? '#F04E23' : '#B8B8B8' } borderWidth="1" width="25%" _text={{color:'black', fontSize:15}}>1.5 Kg</Button>
                <Button  onPress={() => setIndex({key:3,value:1})} backgroundColor="white"  borderColor={index.key === 3 && index.value === 1 ? '#F04E23' : '#B8B8B8' } borderWidth="1" width="25%"_text={{color:'black', fontSize:15}}>1 Kg</Button>

                </HStack>
                </Stack>
            </Flex>
            
          </VStack>
          
        </Center>
        </View>
           
     
      
    );
  }


  const InformationComponent=()=>{

    const [index, setIndex] = useState({key:0,value:0,color:'#ffffff'});
    const dataArray = [
        {
          key: 1,
          title: 'Nutrient Value & Benefits',
          content: 'Contains Vitamin C, Potassium, starch.Potato helps in reducing inflamtion, promote digestion and are good for skin',
                       
        },
        {   
            key: 2,
            title: 'Nutrient Value & Benefits', 
            content: 'Contains Vitamin C, Potassium, starch.Potato helps in reducing inflamtion, promote digestion and are good for skin',
        },
        {
            key: 3,
            title: 'Storage and Uses',
            content: 'Contains Vitamin C, Potassium, starch.Potato helps in reducing inflamtion, promote digestion and are good for skin',
        },

        {
            key: 5,
            title: 'Other Product Info',
            content: 'Contains Vitamin C, Potassium, starch.Potato helps in reducing inflamtion, promote digestion and are good for skin',
        },
      ];
    
    const changeIconColor=(e,key)=>{
        console.log(e)
        if(e.length > 0){
            setIndex({key:key,value:1,color:'#ffffff'})
        }
        else{
            setIndex({key:0,value:0,color:'#ffffff'})
        }
    }

    return (

            <View>        
                        
            {dataArray.map((data)=>{
               
                console.log(index)
                return(
                    <Accordion key={data.key}  expanded={false} style={{borderRadius:0,borderTopWidth:0}} onChange={(e) => changeIconColor(e,data.key) } >
                   
                    <Accordion.Item>
                       
                        <Accordion.Summary>
                            {data.title}
                            <Accordion.Icon  color={index.key === data.key && index.value === 1 ? '#F04E23' : 'black' }/>
                        </Accordion.Summary>
                        <Accordion.Details>
                           {data.content}
                        </Accordion.Details>
                    </Accordion.Item>
                    
                </Accordion>  
    
                )
            })}
            </View>
            
            
       
    );
  }



  const OtherProducts=({category})=>{

    var data = []
    console.log(category)
    if(category == "frequently"){
        data = [
            {
                id:1,
                image: require('../../assets/images/Rice.png'),
                content:'OPP Sooji 500gm Pouch',
                colors:'#53B175',
                actual_amount: 33,
                discount_amount: 19,
                discount_perc: '42%', 
                quantity:[{key:'1_1',value:'500 gm'},{key:'1_2',value:'750 gm'},{key:'1_3',value:'1 kg'}],
                rating_perc: 3.8,
                rating_count: 29108,
                selectedDropdownValue: '500 gm',
                cartValue: 0,
            },
            {
                id:2,
                image: require('../../assets/images/Maggi.png'),
                content: 'Aashirvaad Superior MP Wheat Atta',
                colors:'#53B175',
                actual_amount: 109,
                discount_amount: 98,
                discount_perc: '10%',
                quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
                rating_perc: 4.3,
                rating_count: 62191,
                selectedDropdownValue: '1 kg',
                cartValue: 0,
            },
            {
                id:3,
                image: require('../../assets/images/image_3.png'),
                content:'Aashirvaad Sharbati Select Atta',
                colors:'#53B175',
                actual_amount: 315,
                discount_amount: 293,
                discount_perc: '7%',
                quantity:[{key:'3_1',value:'1 kg'},{key:'3_2',value:'2 kg'},{key:'3_3',value:'3 kg'},
                        {key:'3_4',value:'4 kg'},{key:'3_5',value:'5 kg'},{key:'3_6',value:'6 kg'}],
                rating_perc: 3.8,
                rating_count: 29102,
                selectedDropdownValue: '5 kg',
                cartValue: 0,
    
            },
    
        ]
            
    }
    else if(category == "best_offers"){
        data = [
            {
                id:1,
                image: require('../../assets/images/Coconut.png'),
                content:'OPP Sooji 500gm Pouch',
                colors:'#53B175',
                actual_amount: 33,
                discount_amount: 19,
                discount_perc: '42%', 
                quantity:[{key:'1_1',value:'500 gm'},{key:'1_2',value:'750 gm'},{key:'1_3',value:'1 kg'}],
                rating_perc: 3.8,
                rating_count: 29108,
                selectedDropdownValue: '500 gm',
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
                selectedDropdownValue: '1 kg',
                cartValue: 0,
            },
            {
                id:3,
                image: require('../../assets/images/image_3.png'),
                content:'Aashirvaad Sharbati Select Atta',
                colors:'#53B175',
                actual_amount: 315,
                discount_amount: 293,
                discount_perc: '7%',
                quantity:[{key:'3_1',value:'1 kg'},{key:'3_2',value:'2 kg'},{key:'3_3',value:'3 kg'},
                        {key:'3_4',value:'4 kg'},{key:'3_5',value:'5 kg'},{key:'3_6',value:'6 kg'}],
                rating_perc: 3.8,
                rating_count: 29102,
                selectedDropdownValue: '5 kg',
                cartValue: 0,
    
            },
    
        ]
    
    }

  const [listData, setListData] = useState(data);
    

    return (

        <View style={{marginHorizontal:4,flex:1}}>      

                <FlatList 
                        data={data}
                        renderItem={({item})=>{
                            return(
                              
                                <NativeBaseProvider>
                                <HStack space={6} style={{justifyContent:'space-around',
                               marginLeft:6,borderWidth:1,borderRadius:5,borderColor:'#E2E2E2', }}>
                        
                        <View style={{flex:1}}>
                            <View >
                        <Image source={item.image} resizeMode="contain" alt="Image description" style={{ height:"55%",marginTop:20,marginLeft:30}}/>
                           </View>
                            <View style={{marginLeft:20,margin:10}}>
                            <Select
                            selectedValue={item.selectedDropdownValue}
                            minWidth="89"
                            accessibilityLabel="Choose Service"
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />,
                            }}
                            style={{height:30,borderRadius:20,}}
                            mt={1}
                            
                          
                            > 
                            {item.quantity && item.quantity.map(option => {
                                return (<Select.Item key={option.key} label={option["value"]} value={option.value} /> );
                            })}
                            
                            </Select>
                            </View>
                        </View>
                    
                    <VStack style={{width:'70%',padding:5, marginTop:20, }}>
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

                        <View style={{height:60}}>
                        <Text _dark={{color: "warmGray.50",}} color="coolGray.800" bold style={{width:200,fontSize:15,color:'#9A9A9A',}}>
                            {item.content}                            
                        </Text>
                        </View>
                        
                  
                        
                        
                        
                        <View  style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={[{flex:1,flexDirection:'row',width:1,}]}>

                        <VStack alignItems="center" space={4}>
                        
                      
                      </VStack>
                         
                        </View>
                      
                        <View style={{flex:1,alignItems:'flex-end',margin:10}}>
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
  
    );
  }







export default function ProductDetails() {
  return (
    <NativeBaseProvider>
        <ScrollView >
      
            <View bgColor="white"  flex='1'>
                <View>
                    <Center alignItems="flex-end" style={{marginHorizontal:20,marginVertical:20}}> 
                    <Button size="sm" borderRadius="15"  _text={{color:'#7C7C7C', fontSize:12}} bgColor="#EEEEEE" leftIcon= 
                    {<Image resizeMode="contain"  source={require('../../assets/images/my_list.png')} alt="list"/>}>Add to My List</Button>   
                    </Center> 
                    <Center>
                        <Image source={require('../../assets/images/potato.png')} alt="Image description" style={{marginLeft:20}}/>
                    </Center>
                    <Center alignItems="flex-start"> 
                        <Header  />
                    </Center> 
                </View>      
                    <Divider style={{marginVertical:20}}/>
                        <BodyComponent />
                    <Divider style={{marginTop:20}}/>
                    <Heading size="sm" style={{padding:20,fontSize:13,color:'#7C7C7C'}}>About this product</Heading>
                        <InformationComponent  />
                        <Heading size="md" style={{padding:20,fontSize:16}}>Frequently bought togeather</Heading>
                        <OtherProducts category={"frequently"}/>
                        <Divider style={{marginTop:20}}/>
                        <Heading size="md" style={{padding:20,fontSize:16}}>Best offer for you</Heading>
                        <OtherProducts category={"best_offers"} />
                        <Divider style={{marginTop:20}}/>
                    
            </View>
            
        </ScrollView>
        
     
    </NativeBaseProvider>
  )
}
