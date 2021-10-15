import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { Image, Text, View } from 'react-native'
import styles from './styles'

const Address_header=()=>{

    const centers = ['HOME','CENTER','SENDER']

    const center_address = {'HOME':'A/4 lorem ipsum pune',
                            'CENTER':'A/4 lorem ipsum Blore',
                            'SENDER':'A/4 lorem ipsum hadapsar ',}

    const [centerAddress,setcenterAddress] = useState(center_address[centers[0]])

    const Times =['4:30PM-5PM','5PM-5:30PM','5:30PM-6PM',]

    

    const dropdowns=()=>{
        return(
            <Image source={require('../../../assets/dropdown_svg/dropdown.jpg')} style={{height:5,width:1, resizeMode:'center',flex:1}} />
        )
    }

    return(
        <View style={styles.main_flex}>
            <View style={styles.left_hand_side}>
                <View><Image source={require('../../../assets/location_icon/Vector.png')} style={{height:300,width:20, resizeMode:'contain',flex:1}} /></View>
                <View style={styles.dropdown_and_address}>
            <View>
        <SelectDropdown 
            data={centers}
            onSelect={(selectedItem,index)=>{
                console.log(selectedItem)
                setcenterAddress(center_address[selectedItem])
            }}
            buttonTextAfterSelection={(selectedItem,index)=>{
                return selectedItem
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
            
           />
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
                console.log(selectedItem)
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