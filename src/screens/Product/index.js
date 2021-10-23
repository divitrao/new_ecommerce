import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProductDetails from '../../components/Product';


export default function Product({navigation}) {
  

  return (
    <View style={styles.container}>
        <ProductDetails navigation={navigation} />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})