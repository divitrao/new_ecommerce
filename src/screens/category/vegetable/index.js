import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import Header from '../../components/Categories/header';
import Categories from '../../../components/Categories/categories'
import Milk_Categories from '../../../components/Categories/milk_category';

export default function Category({navigation}) {
  

  return (
    <View style={styles.container}>
        <Categories navigation={navigation} />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})