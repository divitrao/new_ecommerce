
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../../components/Categories/header';
import Boxes from '../../components/Categories/boxes';

export default function Home({navigation}) {
  

  return (
    <View style={styles.container}>
       
        <Boxes />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})