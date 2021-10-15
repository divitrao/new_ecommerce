import React from 'react'
import {TextInput, View, Text, Image} from 'react-native'
import styles from './styles'
const Search_bar = ()=>{

    return(
        <View style={styles.main_view}>
            <View>
                <Image source={require('../../../assets/search_icon/search.png')} style={{height:15,width:15}} />
            </View>
            <View>
                <TextInput placeholder="Search for products and category" />
            </View>
            <View>
            <Image source={require('../../../assets/mic_icon/mic.png')} style={{height:15,width:15}} />
            </View>
            <View>
            <Image source={require('../../../assets/camera_icon/camera.png')} style={{height:15,width:15}} />
            </View>
        </View>
    )
}

export default Search_bar