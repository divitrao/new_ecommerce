import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './styles'

const Footer = ()=>{
    return(
        <View style={styles.main_view}>
            <View style={styles.item}>
                <View>
                   <Image source={require('../../../assets/footer_icons/home.png')} />
                </View>
                <View>
                    <Text>Home</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View>
                <Image source={require('../../../assets/footer_icons/Frame.png')} style={{height:15,width:15}} />
                </View>
                <View>
                    <Text>Categories</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View>
                <Image source={require('../../../assets/footer_icons/search.png')} />
                </View>
                <View>
                    <Text>Search</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View>
                <Image source={require('../../../assets/footer_icons/pad.png')} />
                </View>
                <View>
                    <Text>My List</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View>
                <Image source={require('../../../assets/footer_icons/skeleton.png')} />
                </View>
                <View>
                    <Text>Account</Text>
                </View>
            </View>

            
        </View>
    )
}

export default Footer