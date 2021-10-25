import React from 'react'
import {View} from 'react-native'
import Carousel_card from './carousel_section/carousel_section'
import Address_header from './header_section/header'
import Search_bar from './search_bar_section/search_bar'
import Shop from './shop_section/shop_section'

const Home = ({navigation}) => {
    
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Address_header />
            <View style={{alignItems:'center',paddingLeft:10,paddingRight:10}}>
            <Search_bar navigation={navigation} />
            </View>
            <Carousel_card />
            <Shop navigation={navigation} />
        </View>
    )
}

export default Home
