import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import Search_icon from '../../assets/search_icon/search_svg.svg'
import Back_icon from '../../assets/back_arrow/back.svg'
import styles from './styles'

const Custom_header = (props)=>{
    
    const centers = ['HOME','CENTER','SENDER']
    return(
        <View style={styles.main_view}>
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
               
            }}
            buttonTextAfterSelection={(selectedItem,index)=>{
                return selectedItem
            }}
            rowTextForSelection = {(item,index)=>{
                return item

            }}
            defaultButtonText={centers[0]}
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
       
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