import React from 'react'
import {View, Text} from 'react-native'
import Carousel_card from './carousel_section/carousel_section'
import Address_header from './header_section/header'
import Search_bar from './search_bar_section/search_bar'

const Home = () => {
    return (
        <View>
            <Address_header />
            <View style={{alignItems:'center'}}>
            <Search_bar />
            </View>
            <Carousel_card />
        </View>
    )
}

export default Home
