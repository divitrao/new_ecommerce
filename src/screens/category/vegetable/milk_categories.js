import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Milk_Categories from '../../../components/Categories/milk_category';

export default function Milk_Category({navigation}) {
  

  return (
    <View style={styles.container}>
        
        <Milk_Categories navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})