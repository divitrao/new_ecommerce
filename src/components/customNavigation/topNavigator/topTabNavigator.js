
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../../../screens/MobileOtp/Categories';
import Category from '../../../screens/category/vegetable/index';
import Milk_Category from '../../../screens/category/vegetable/milk_categories'
import List_Category from '../../../screens/list';


function TopTabNavigation(){
  const MaterialTopTabs = createMaterialTopTabNavigator();

  return(
        
          <MaterialTopTabs.Navigator screenOptions={{
            tabBarLabelStyle: {fontSize:12},
            tabBarScrollEnabled: true,
            swipeEnabled:false,
            tabBarAllowFontScaling:true,
            tabBarActiveTintColor:'#F04E23',
            tabBarInactiveTintColor:'#000000',
            tabBarPressColor:'#F04E23',
            
            
          }} style={{backgroundColor:'#ff800',paddingRight:3}}>
              <MaterialTopTabs.Screen name="All" component={Category} options={{title:"All",}} />
              <MaterialTopTabs.Screen name="Edible" component={Category} options={{title:"Edible Oil & Ghee"}} />
              <MaterialTopTabs.Screen name="Flours" component={Category} options={{title:"Flours"}} />
              <MaterialTopTabs.Screen name="Cereals" component={Milk_Category} options={{title:"Cereals"}} />
              <MaterialTopTabs.Screen name="Organics" component={List_Category} options={{title:"Organics"}} />
            


          </MaterialTopTabs.Navigator>
  )
}


export default TopTabNavigation