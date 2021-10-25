import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Categories from '../../../components/Categories/categories'

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