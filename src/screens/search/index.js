import React, { useState, useRef, useEffect } from "react";
import { Text,TextInput ,TouchableOpacity,View, FlatList } from "react-native";
import styles from './styles'
import Search_svg from '../../assets/search_icon/search_svg.svg' 
import Mic_svg from '../../assets/mic_icon/mic_svg.svg'
import Camera_svg from '../../assets/camera_icon/camera_svg.svg'
import Back from '../../assets/back_arrow/back.svg'
import Clock from '../../assets/clock/clock.svg'
import Banana from '../../assets/fruits_trending_search/banana.svg'
import Fortune_oil from '../../assets/fruits_trending_search/fortune_oil.svg'
import Ashirwad_aata from '../../assets/fruits_trending_search/ashirwad_aata.svg'
import Cross from '../../assets/cross/cross.svg'
import SearchCategoriesNavigator from "../../navigations/topNavigator/searchCategoriesNavigator";
import Milk_Categories from '../../screens/category/vegetable/milk_categories';

const Search =({navigation})=>{

    const [ShowCross,setShowCross] = useState(false)
    const [ShowSearchedContent, setShowSearchedContent ] = useState(false)

    const inputref = useRef()

    useEffect(() => {

        inputref.current.focus()
        
    })

    const [showSearch, setShowSearch] = useState(false)
    const recent_search = [
        {
            id:1,
            searched_item:'Potato'
        },
        {
            id:2,
            searched_item:'Tomato'
        }

    ]

    const trending_search = [
        {
            id:1,
            trending_item:'Banana',
            picture:<Banana />,
            category:'Fruits & Vegetable'
        },
        {
            id:2,
            trending_item:'Oil',
            picture:<Fortune_oil />,
            category:'Cooking Essential'
        },
        {
            id:3,
            trending_item:'Ashirwad Atta',
            picture:<Ashirwad_aata />,
            category:'Breakfast and Essential'
        },
        

    ]

    const ShowAnother = (e)=>{

        
        

        if(e.length>0){
            setShowCross(true)
        }
        else{
            setShowCross(false)
            setShowSearchedContent(false)
        }

        
    }

    const Search_Input=()=>{
        setShowSearchedContent(true)
        setShowSearch(false)
    }


    return(
    //     <View style={{backgroundColor:'white',flex:1}}>
    //   <SearchCategoriesNavigator />
    //   </View>
<View style={{backgroundColor:'white',flex:1}}>

<View style={{flexDirection:'row',alignItems:'center',paddingTop:10}}>
    <View style={{paddingRight:15,marginHorizontal:5}}>
    <TouchableOpacity style={{height:22,width:22}} onPress={navigation.goBack}>
               <Back />
               </TouchableOpacity>
    </View>
    <View style={{borderWidth:0.2, borderColor:'grey',borderRadius:8}}>
        <View style={styles.main_view}>
            <View style={{paddingRight:10,paddingLeft:10}}>
             <TouchableOpacity style={{height:18,width:18}}>
                <Search_svg />
                </TouchableOpacity>
            </View>
            <View style={{paddingRight:10}}>
                
                <TextInput placeholder="Search for products and category" onSubmitEditing={()=>Search_Input()} onChangeText={(e)=>ShowAnother(e)} ref={inputref}   onBlur={()=>setShowSearch(false)}  />
            </View>
            { !ShowCross && <View style={{flexDirection:'row'}}>
            <View style={{paddingRight:10}}>
           
            <TouchableOpacity style={{height:18,width:18}}>
            <Mic_svg />
            </TouchableOpacity>
            </View>
            <View style={{paddingRight:10}}>
            <TouchableOpacity style={{height:18,width:18}}>
            <Camera_svg />
            </TouchableOpacity>
            </View>
            </View>}
            {ShowCross && <View style={{paddingRight:10}}>
                <Cross />
                </View>

            }
        </View>
    </View>
</View>
{ ShowSearchedContent &&  <SearchCategoriesNavigator />}
{!ShowCross &&
<View style={{marginTop:40,marginHorizontal:15}}>
            {/* <Milk_Categories /> */}
    {/* <SearchCategoriesNavigator test_string='hello' /> */}

<View style={{paddingLeft:10}}>
    <Text style={{color:'grey',fontStyle:'italic'}}>Recent search</Text>
    <View>
        <FlatList
        
        data={recent_search}
        renderItem={({item})=>{
            return(
                <View style={{flexDirection:'row', alignItems:'center',paddingTop:12}}>
                    <View style={{paddingLeft:5}}>
                    <Clock />
                    </View>
                    <View style={{marginLeft:30}}>
                    <Text>{item.searched_item}</Text>
                    </View>
                </View>
            )
        }}
        
        />
    </View>
</View> 


 <View style={{paddingLeft:10,paddingTop:15}}>
    <Text style={{color:'grey',fontStyle:'italic'}}>Trending  search</Text>
    <View>
        <FlatList
        
        data={trending_search}
        renderItem={({item})=>{
            return(
                <View style={{flexDirection:'row', alignItems:'center',paddingTop:12}}>
                    <View style={{paddingLeft:5}}>
                    {item.picture}
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row'}}>
                    <View><Text style={{marginRight:8}}>{item.trending_item}</Text></View>
                    <View><Text style={{marginRight:4,color:'grey',fontStyle:'italic'}}>in</Text></View>
                    <View><Text style={{marginRight:4,color:'blue',fontStyle:'italic'}}>{item.category}</Text></View>
                    </View>
                </View>
            )
        }}
        
        />
    </View>
</View>

</View>
}
</View> 
    )
}

export default Search
