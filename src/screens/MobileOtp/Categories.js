
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import Header from '../../components/Categories/header';
import Category from '../../components/Categories/categories'

export default function Home({navigation}) {
  

  return (
    <View style={styles.container}>
       
        <Category />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})