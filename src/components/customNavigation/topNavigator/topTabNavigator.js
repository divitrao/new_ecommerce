
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../../../screens/MobileOtp/Categories';
import Category from '../../../screens/category';


function TopTabNavigation(){
  const MaterialTopTabs = createMaterialTopTabNavigator();

  return(
        
          <MaterialTopTabs.Navigator screenOptions={{
            tabBarLabelStyle: {fontSize:12},
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: {color:'#F04E23'},
            tabBarIndicatorContainerStyle: {color:'#F04E23'},
            
            
          }}>
              <MaterialTopTabs.Screen name="All" component={Category} />
              <MaterialTopTabs.Screen name="SeasonalFruits" component={Category} />
              <MaterialTopTabs.Screen name="ExoticFruits" component={Category} />
              <MaterialTopTabs.Screen name="DailyVegetables" component={Category} />
              <MaterialTopTabs.Screen name="DailyVegetables222" component={Category} />
          
          </MaterialTopTabs.Navigator>
  )
}


export default TopTabNavigation