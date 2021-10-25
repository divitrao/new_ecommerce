
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';



export default function Header() {
  

  return (
    <View style={styles.header}>
        <Text>Header Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F04E23',
        marginTop:100,
        marginBottom: 100
        
    },
})