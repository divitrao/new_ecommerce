// import React from "react";
// import { Text, View } from "react-native";

// const Category =()=>{
//     return(
//         <View style={{alignItems:'center',backgroundColor:'#b9faf6',marginVertical:100,height:50,}}>
//             <Text style={{fontSize:40}}>Category</Text>
//         </View>
//     )
// }

// export default Category


import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../../components/Categories/header';
import Boxes from '../../components/Categories/boxes';

export default function Category({navigation}) {
  

  return (
    <View style={styles.container}>
        {/* <Header /> */}
        <Boxes />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})