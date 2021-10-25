import React from 'react'
import { View, Text} from 'react-native'
import styles from './styles'
import Search_svg from '../../../assets/search_icon/search_svg.svg'
import Mic_svg from '../../../assets/mic_icon/mic_svg.svg'
import Camera_svg from '../../../assets/camera_icon/camera_svg.svg'
const Search_bar = (props)=>{
   

    return(
        <View style={styles.main_view}>
            <View>
                <Search_svg />
            </View>
            <View>
                <Text style={{color:'grey'}} onPress={()=>props.navigation.navigate('Search')}>Search for products and category</Text>
            </View>
            <View>
            <Mic_svg />
            </View>
            <View>
            <Camera_svg />
            </View>
        </View>
    )
}

export default Search_bar