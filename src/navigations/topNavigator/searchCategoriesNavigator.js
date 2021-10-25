import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Milk_Category from '../../screens/category/vegetable/milk_categories';


function SearchCategoriesNavigator({test_string}){
  console.log(test_string)
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
              <MaterialTopTabs.Screen name="all" component={Milk_Category} options={{title:"All",}} />
              <MaterialTopTabs.Screen name="milk_prods" component={Milk_Category} options={{title:"Milk & Milk products"}} />
              <MaterialTopTabs.Screen name="vegan_prods" component={Milk_Category} options={{title:"Vegan Products"}} />
            


          </MaterialTopTabs.Navigator>
  )
}


export default SearchCategoriesNavigator