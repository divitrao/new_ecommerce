import React, { useState } from 'react';
import { View, Text,Image, ScrollView,TouchableOpacity } from 'react-native';
import {Card,Input, NativeBaseProvider,Button, extendTheme} from 'native-base';
import styles from "./styles"
import { Address } from '../../api/data';


const MyAddress = () => {
    
    const [home, setHome] = useState(true)


    


    return (

            
          <NativeBaseProvider>
              <View style={styles.main_address_view}>
            <View style={styles.add_button}>

                <Button backgroundColor='#EDEDED' borderRadius='20' _text={{color:'#7E8090'}}
                 leftIcon= {<Image resizeMode="contain"  source={require('../../assets/Account/add.png')} alt="list"/>}>
                    Add a new address
                </Button>
                
            </View>
            
  <View>
        <View style={{marginTop:25}}>
            {Address.map((item)=>{
                return(
                <Card key={item.id} style={styles.address_card} shadow={6} _light={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
                
                        <View style={styles.card_style}>
                            <View style={styles.item_name}>
                                <Text style={styles.text_item_name}>
                                    {item.name}
                                </Text>

                                {item.name=='Home' && 
                                                        <View style={styles.default_style}>
                                                            <Text style={styles.default_text_style}>
                                                                Default
                                                            </Text>

                                                        </View> 
                                                    }
                                 
                            </View>

                            <View>
                            <Image source={item.options_icon} />
                           </View>

                        </View>    
                    
                    <View style={{}}>
                        <View> 
                        
                            <Text style={{marginHorizontal:7}} >
                                {item.content}
                            </Text>

                        </View>    
                    
                        
                    </View>
            
                </Card>
                )
            })}
            </View>
            </View>
            </View>
            </NativeBaseProvider>



    )
};

export default MyAddress;

