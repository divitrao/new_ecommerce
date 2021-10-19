import React from 'react'
import {TextInput, View, Text, Image} from 'react-native'
import styles from './styles'
import Search_svg from '../../../assets/search_icon/search_svg.svg'
import Mic_svg from '../../../assets/mic_icon/mic_svg.svg'
import Camera_svg from '../../../assets/camera_icon/camera_svg.svg'
const Search_bar = (props)=>{
   

    return(
        <View style={styles.main_view}>
            <View>
                {/* <Image source={require('../../../assets/search_icon/search.png')} style={{height:15,width:15}} /> */}
                <Search_svg />
            </View>
            <View>
                {/* <TextInput placeholder="Search for products and category"  onFocus={()=>props.navigation.navigate('Search')} /> */}
                <Text style={{color:'grey'}} onPress={()=>props.navigation.navigate('Search')}>Search for products and category</Text>
            </View>
            <View>
            {/* <Image source={require('../../../assets/mic_icon/mic.png')} style={{height:15,width:15}} /> */}
            <Mic_svg />
            </View>
            <View>
            {/* <Image source={require('../../../assets/camera_icon/camera.png')} style={{height:15,width:15}} /> */}
            <Camera_svg />
            </View>
        </View>
    )
}

export default Search_bar