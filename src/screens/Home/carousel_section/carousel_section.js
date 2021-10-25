import React, { useState } from "react";
import {Animated ,FlatList, Text, View } from "react-native";
import styles from './styles'

const  Carousel_card=()=>{
    var percent = 0
    const [currentSlide,setCurrentSlide] = useState(0)


    const onViewRef = React.useRef((viewableItems)=> {
        const key = viewableItems.viewableItems.length-1
        // Use viewable items in state or as intended
        setCurrentSlide(viewableItems.viewableItems[key].index)
    })
    
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 5 })

const occasion = ['Dussera','Diwali','Christmas','Republic Day','Makarsankranti']

const Slidelist = Array.from({length:5}).map((_,i)=>{
    percent = percent+10
    return{
        id:i,
        percent:percent,
        occasions:occasion[i]
    }
})


const Slide=({data})=>{
    return(
        <View style={styles.card_view}>
        <Text>Upto </Text>
        <Text style={{fontSize:50}}>{data.percent} %</Text>
        <Text>{data.occasions} offer</Text>
        </View>
    )
}



 return(
    <View>
    <Animated.FlatList 
      data={Slidelist}
      style={{padding:4}}
      renderItem={({item})=>{
          return <Slide data={item} />
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig = {viewConfigRef.current}
       />
    
    
    <View style={styles.Flatlist_Style} >
    
    {occasion.map((occasions,i)=>{
        return(
        <View
           key={i}
           style={[
               styles.indicator,
               i===currentSlide?styles.activeIndicator:undefined,
           ]}
           />
        )
           
        
    })}
    </View>
    
    
    

    </View>
    );
}

export default Carousel_card