import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import Search_icon from '../../assets/search_icon/search_svg.svg'
import Back_icon from '../../assets/back_arrow/back.svg'

const Custom_header = (props)=>{
    console.log(props,'nnnnn')
    
    const centers = ['HOME','CENTER','SENDER']
    const checked=()=>{
      console.log('clicked')
    }
    return(
        <View style={{backgroundColor:'white', flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:8}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>

            
            <TouchableOpacity onPress={props.navigation.goBack}>
                <Back_icon />
            </TouchableOpacity>
            
            </View>
            <View style={{marginHorizontal:20,marginTop:10}}>
            <View style={{}}>
                <Text style={{fontSize:16,textAlign:'left'}}>{props.titles}</Text>
            </View>
            <View style={{}}>
            <SelectDropdown
            rowTextStyle={{height:40}}
            rowStyle={{width:100}}
            
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
            buttonStyle={{width:100,height:30,backgroundColor:'transparent',justifyContent:'flex-start'}}
            buttonTextStyle={{fontSize:13,alignItems:'flex-start',color:'#F04E23',textAlign:'left'}}
            //renderDropdownIcon = {()=>dropdowns()}
            // dropdownIconPosition='right'
           />
            </View>
            </View>
            
            </View>
            <View style={{paddingRight:10}}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Search')} >
                <Search_icon />
              </TouchableOpacity>
            </View>
        </View>
    )
} 

export default Custom_header