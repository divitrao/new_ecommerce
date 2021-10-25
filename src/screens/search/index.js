import React, { useState, useRef, useEffect } from "react";
import { Text,TextInput ,TouchableOpacity,View, FlatList } from "react-native";
import styles from './styles'
import Search_svg from '../../assets/search_icon/search_svg.svg' 
import Mic_svg from '../../assets/mic_icon/mic_svg.svg'
import Camera_svg from '../../assets/camera_icon/camera_svg.svg'
import Back from '../../assets/back_arrow/back.svg'
import Clock from '../../assets/clock/clock.svg'
import Cross from '../../assets/cross/cross.svg'
import SearchCategoriesNavigator from "../../components/customNavigation/topNavigator/searchCategoriesNavigator";
import { recent_search,trending_search } from "../../api/data";

const Search =({navigation})=>{

    const [ShowCross,setShowCross] = useState(false)
    const [ShowSearchedContent, setShowSearchedContent ] = useState(false)

    const inputref = useRef()

    useEffect(() => {

        inputref.current.focus()
        
    })


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
        
    }


    return(
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
                
                <TextInput placeholder="Search for products and category" onSubmitEditing={()=>Search_Input()} onChangeText={(e)=>ShowAnother(e)} ref={inputref}     />
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
