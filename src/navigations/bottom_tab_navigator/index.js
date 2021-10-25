import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home/home';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Category from '../../screens/category';
import Account from '../../screens/Account';
import Search from '../../screens/search';
import Search_svg from '../../assets/search_icon/search_svg.svg' 
import Frames from '../../assets/footer_icons/Frame.svg'
import Pad from '../../assets/footer_icons/pad.svg'
import Person from '../../assets/footer_icons/person.svg'
import Home_Svg from '../../assets/footer_icons/home.svg'
import myListNavigator from '../../components/customNavigation/topNavigator/myListNavigator';
import Search_icon from '../../assets/search_icon/search_svg.svg'

const Tab = createBottomTabNavigator();

const  MyTabs=({navigation})=> {
  return (
    <Tab.Navigator initialRouteName='Home'  >
      <Tab.Screen name="Home"  options={{headerStyle:{height:80},headerShown:false,tabBarShowLabel:false ,tabBarIcon:({focused})=>(
          <View style={{alignItems:'center'}}>
              <View style={{width:25,height:2,backgroundColor:focused?'#F04E23':undefined}}>

              </View>
             <Home_Svg />
             <Text style={{color:focused?'#F04E23':undefined}}>HOME</Text>
          </View>
      )}} component={Home} />


<Tab.Screen name="Category"  options={{
                                       headerShown:false,
                                       tabBarShowLabel:false ,
                                       title:'Fruits & Vegetables',
                                       headerRight: ()=>{ 
                                          return(
                                              <View>
                                                    <Image resizeMode='contain' source={require('../../assets/images/Vector.png')} />  
                                              </View>
                                          )
                                      },
                                       
                                       tabBarIcon:({focused})=>(
          <View style={{alignItems:'center'}}>
              <View style={{width:25,height:2,backgroundColor:focused?'#F04E23':undefined}}>

              </View>
              <Frames />
             
             <Text style={{color:focused?'#F04E23':undefined}}>Category</Text>
          </View>
      )}} component={Category} />


<Tab.Screen name="Search"  options={{headerStyle:{height:80},headerShown:false,tabBarShowLabel:false ,tabBarIcon:({focused})=>(
          <View style={{alignItems:'center'}}>
              <View style={{width:25,height:2,backgroundColor:focused?'#F04E23':undefined}}>

              </View>
              <Search_svg />
             <Text style={{color:focused?'#F04E23':undefined}}>Search</Text>
          </View>
      )}} component={Search} />

<Tab.Screen name="mylist"  options={{tabBarShowLabel:false,headerTitle:'My List',headerRight: ()=>{ 
                                          return(
                                              <View style={{marginHorizontal:10}}>
                                                  <TouchableOpacity style={{width:20,height:20}} onPress={()=>navigation.navigate('Search')}  >
                                                   <Search_icon />
                                                   </TouchableOpacity>   
              </View>
                                          )
                                      } ,tabBarIcon:({focused})=>(
          <View style={{alignItems:'center'}}>
              <View style={{width:25,height:2,backgroundColor:focused?'#F04E23':undefined}}>

              </View>
              <Pad />
             <Text style={{color:focused?'#F04E23':undefined}}>My List</Text>
          </View>
      )}} component={myListNavigator} />

<Tab.Screen name="account"  options={{headerStyle:{height:80},headerShown:false,tabBarShowLabel:false ,tabBarIcon:({focused})=>(
          <View style={{alignItems:'center'}}>
              <View style={{width:25,height:2,backgroundColor:focused?'#F04E23':undefined}}>

              </View>
              <Person />
             <Text style={{color:focused?'#F04E23':undefined}}>Account</Text>
          </View>
      )}} component={Account} />

    </Tab.Navigator>
  );
}

export default MyTabs