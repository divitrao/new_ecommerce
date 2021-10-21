import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import List_Category from '../../../screens/list';


function myListNavigator(){
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
              <MaterialTopTabs.Screen name="recommend" component={List_Category} options={{title:"Recommendation",}} />
              <MaterialTopTabs.Screen name="frequently" component={List_Category} options={{title:"Frequently bought"}} />
              <MaterialTopTabs.Screen name="my_list" component={List_Category} options={{title:"My list"}} />
            


          </MaterialTopTabs.Navigator>
  )
}


export default myListNavigator