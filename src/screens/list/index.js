import React from 'react';
import { StyleSheet, View } from 'react-native';
import List_Categories from '../../components/Categories/list';

export default function List_Category({navigation}) {
  

  return (
    <View style={styles.container}>
        <List_Categories navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})