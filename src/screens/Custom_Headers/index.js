import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {ArrowBackIcon, NativeBaseProvider, Center, ChevronDownIcon, VStack, Select,CheckIcon} from 'native-base'
const Custom_header = (props)=>{
    let [service, setService] = React.useState("")
    console.log(props)
    return(
        <View style={{height:60,backgroundColor:'grey'}}>
            <View style={{flexDirection:'row'}}>
            <View style={{paddingTop:20}}>

              
            <TouchableOpacity onPress={props.navigation.goBack}>
                <View>
                <NativeBaseProvider>
                
                  
                        <ArrowBackIcon  size="10" />
                
                        
                </NativeBaseProvider>
                </View>
                </TouchableOpacity>
            
            </View>
            <View>
            <View>
                <Text style={{fontSize:20}}>{props.titles}</Text>
            </View>
            <View>
            <NativeBaseProvider>
            <VStack alignItems="center" space={4} style={{height:36,}} >
      <Select
    //   borderX='InactiveBorder'
    variant="unstyled"
        selectedValue={service}
        minWidth="120"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        defaultValue='Bangalore'
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="Bangalore" value="Bangalore" />
        <Select.Item label="Mumbai" value="Mumbai" />
        <Select.Item label="Pune" value="Pune" />
        
      </Select>
    </VStack>
    </NativeBaseProvider>
            </View>
            </View>
            
            </View>
        </View>
    )
} 

export default Custom_header