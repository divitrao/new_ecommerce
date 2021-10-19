import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {ArrowBackIcon, NativeBaseProvider, Center, ChevronDownIcon, VStack, Select,CheckIcon} from 'native-base'
import SelectDropdown from 'react-native-select-dropdown'
const Custom_header = (props)=>{
    let [service, setService] = React.useState("")
    // console.log(props)
    const centers = ['HOME','CENTER','SENDER']
    const checked=()=>{
      console.log('clicked')
    }
    return(
        <View style={{backgroundColor:'white', flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>

            
            <TouchableOpacity onPress={props.navigation.goBack}>
                <Image source={require('../../assets/back_arrow/back.png')} style={{width:22,height:30,resizeMode:'contain'}}  />
            </TouchableOpacity>
            
            </View>
            <View style={{paddingLeft:5}}>
            <View>
                <Text style={{fontSize:20}}>{props.titles}</Text>
            </View>
            <View>
            <SelectDropdown 
            data={centers}
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
            defaultButtonText={centers[0]}
            buttonStyle={{width:150,height:30,backgroundColor:'transparent'}}
            buttonTextStyle={{fontSize:13}}
            //renderDropdownIcon = {()=>dropdowns()}
            dropdownIconPosition='right'
           />
            </View>
            </View>
            
            </View>
            <View style={{paddingRight:10}}>
              <TouchableOpacity>
                <Image source={require('../../assets/search_icon/search.png')} style={{height:30,width:30}} />
              </TouchableOpacity>
            </View>
        </View>
    )
} 

export default Custom_header