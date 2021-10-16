import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home/home';
import { Image, View, Text } from 'react-native';
import Category from '../../screens/category/';
import Account from '../../screens/Account';
import My_List from '../../screens/list';
import Search from '../../screens/search';

const Tab = createBottomTabNavigator();

const  MyTabs=()=> {
  return (
    <Tab.Navigator initialRouteName='Home'  >
      <Tab.Screen name="Home"  options={{headerStyle:{height:80},headerShown:false,tabBarShowLabel:false ,tabBarIcon:({focused})=>(
          <View style={{alignItems:'center'}}>
              <View style={{width:25,height:2,backgroundColor:focused?'#F04E23':undefined}}>

              </View>
             <Image 
             source={require('../../assets/footer_icons/homes.png')} 
             resizeMode="contain"
             style={{
                width:25,
                height:25,
                tintColor:focused?'#F04E23':undefined,
                
             }} />
             <Text style={{color:focused?'#F04E23':undefined}}>HOME</Text>
          </View>
      )}} component={Home} />


<Tab.Screen name="Category"  options={{headerStyle:{height:80},headerShown:false,tabBarShowLabel:false ,tabBarIcon:({focused})=>(
          <View style={{alignItems:'center'}}>
              <View style={{width:25,height:2,backgroundColor:focused?'#F04E23':undefined}}>

              </View>
             <Image 
             source={require('../../assets/footer_icons/frames.png')} 
             resizeMode="contain"
             style={{
                width:25,
                height:25,
                tintColor:focused?'#F04E23':undefined,
                
             }} />
             <Text style={{color:focused?'#F04E23':undefined}}>Category</Text>
          </View>
      )}} component={Category} />



<Tab.Screen name="Search"  options={{headerStyle:{height:80},headerShown:false,tabBarShowLabel:false ,tabBarIcon:({focused})=>(
          <View style={{alignItems:'center'}}>
              <View style={{width:25,height:2,backgroundColor:focused?'#F04E23':undefined}}>

              </View>
             <Image 
             source={require('../../assets/footer_icons/search.png')} 
             resizeMode="contain"
             style={{
                width:25,
                height:25,
                tintColor:focused?'#F04E23':undefined,
                
             }} />
             <Text style={{color:focused?'#F04E23':undefined}}>Search</Text>
          </View>
      )}} component={Search} />

<Tab.Screen name="mylist"  options={{headerStyle:{height:80},headerShown:false,tabBarShowLabel:false ,tabBarIcon:({focused})=>(
          <View style={{alignItems:'center'}}>
              <View style={{width:25,height:2,backgroundColor:focused?'#F04E23':undefined}}>

              </View>
             <Image 
             source={require('../../assets/footer_icons/pad.png')} 
             resizeMode="contain"
             style={{
                width:25,
                height:25,
                tintColor:focused?'#F04E23':undefined,
                
             }} />
             <Text style={{color:focused?'#F04E23':undefined}}>My List</Text>
          </View>
      )}} component={My_List} />




<Tab.Screen name="account"  options={{headerStyle:{height:80},headerShown:false,tabBarShowLabel:false ,tabBarIcon:({focused})=>(
          <View style={{alignItems:'center'}}>
              <View style={{width:25,height:2,backgroundColor:focused?'#F04E23':undefined}}>

              </View>
             <Image 
             source={require('../../assets/footer_icons/skeleton.png')} 
             resizeMode="contain"
             style={{
                width:25,
                height:25,
                tintColor:focused?'#F04E23':undefined,
                
             }} />
             <Text style={{color:focused?'#F04E23':undefined}}>Account</Text>
          </View>
      )}} component={Account} />





     
    </Tab.Navigator>
  );
}

export default MyTabs