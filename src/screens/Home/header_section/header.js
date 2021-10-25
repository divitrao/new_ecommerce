import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { Image, Text, View } from 'react-native'
import styles from './styles'


const Address_header=()=>{

    const centers = ['Bangalore','Mumbai','Pune']

    const center_address = {'Bangalore':'A/4 lorem ipsum yelanka',
                            'Mumbai':'A/4 lorem ipsum Sakinaka',
                            'Pune':'A/4 lorem ipsum hadapsar ',}


    const [centerAddress,setcenterAddress] = useState(center_address['Bangalore'])

    const Times =['4:30PM-5PM','5PM-5:30PM','5:30PM-6PM',]

  

    const dropdowns=(selectedItem)=>{

        return(
            selectedItem
           
        )
    }

    return(
        
        <View style={styles.main_flex}>
            
            <View style={styles.left_hand_side}>
                <View><Image source={require('../../../assets/location_icon/Vector.png')} style={{height:300,width:20, resizeMode:'contain',flex:1}} /></View>
                <View style={styles.dropdown_and_address}>
            <View style={{flex:1}}>
            
    
        <SelectDropdown 
            data={centers}
            onSelect={(selectedItem,index)=>{
                console.log(selectedItem)
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
            dropdownIconPosition='right'
           />
        </View>
    </View>
</View>

    )
}

export default Address_header