import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { Image, Text, View } from 'react-native'
import styles from './styles'

import {
    Select,
    VStack,
    CheckIcon,
    Center,
    NativeBaseProvider,
  } from "native-base"

const Address_header=()=>{
    let [service, setService] = React.useState("")
    const centers = ['HOME','CENTER','SENDER']

    const center_address = {'Bangalore':'A/4 lorem ipsum yelanka',
                            'Mumbai':'A/4 lorem ipsum Sakinaka',
                            'Pune':'A/4 lorem ipsum hadapsar ',}

    // const dropdownicon = <NativeBaseProvider><ChevronDownIcon size='4' /></NativeBaseProvider>

    const [centerAddress,setcenterAddress] = useState(center_address['Bangalore'])

    const Times =['4:30PM-5PM','5PM-5:30PM','5:30PM-6PM',]

    const ChangeAddress=(itemvalue)=>{

        setService(itemvalue)
        console.log(itemvalue)
        setcenterAddress(center_address[itemvalue])

    }

    // const dropdowns=(selectedItem)=>{

    //     return(
    //         // selectedItem + '>'
    //         <NativeBaseProvider><ChevronDownIcon size='4' /></NativeBaseProvider>

    //         // <Image source={require('../../../assets/dropdown_svg/dropdown.jpg')} style={{height:5,width:1, resizeMode:'center',flex:1}} />
    //     )
    // }

    return(
        <View style={styles.main_flex}>
            <View style={styles.left_hand_side}>
                <View><Image source={require('../../../assets/location_icon/Vector.png')} style={{height:300,width:20, resizeMode:'contain',flex:1}} /></View>
                <View style={styles.dropdown_and_address}>
            <View style={{flex:1}}>
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
        onValueChange={(itemValue) => ChangeAddress(itemValue)}
      >
        <Select.Item label="Bangalore" value="Bangalore" />
        <Select.Item label="Mumbai" value="Mumbai" />
        <Select.Item label="Pune" value="Pune" />
        
      </Select>
    </VStack>
    </NativeBaseProvider>
        {/* <SelectDropdown 
            data={centers}
            onSelect={(selectedItem,index)=>{
                // console.log(selectedItem)
                setcenterAddress(center_address[selectedItem])
            }}
            buttonTextAfterSelection={(selectedItem,index)=>{
                return dropdowns(selectedItem)
            }}
            rowTextForSelection = {(item,index)=>{
                return item

            }}
            defaultButtonText={centers[0]}
            buttonStyle={{width:150,height:30,backgroundColor:'transparent'}}
            buttonTextStyle={{fontSize:18,}}
            //renderDropdownIcon = {()=>dropdowns()}
            dropdownIconPosition='right'
            rowTextStyle={{textAlign:'left'}}
            
           /> */}
         
    </View>
    
    <View>
        <Text style={styles.address}>{centerAddress}</Text>
    </View>
    </View>
    
    </View>
    <View style={styles.dropdown_and_time}>
        <View>
            <Text style={styles.time_title}>Earliest Dilevery Slot</Text>
        </View>
        <View>
        <SelectDropdown 
            data={Times}
            onSelect={(selectedItem,index)=>{
                // console.log(selectedItem)
                // setcenterAddress(center_address[selectedItem])
            }}
            buttonTextAfterSelection={(selectedItem,index)=>{
                return selectedItem
            }}
            rowTextForSelection = {(item,index)=>{
                return item

            }}
            defaultButtonText={Times[0]}
            buttonStyle={{width:150,height:30,backgroundColor:'transparent'}}
            buttonTextStyle={{fontSize:13}}
            //renderDropdownIcon = {()=>dropdowns()}
            dropdownIconPosition='right'
           />
        </View>
    </View>
</View>

    )
}

export default Address_header