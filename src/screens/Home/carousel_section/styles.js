import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    card_view:{
        // flexDirection:'row',
        alignItems:'flex-start',
        backgroundColor:'#FFECEC',
        width:Dimensions.get('screen').width,
        height:150,
        borderWidth:1,
        borderColor:'#DFDFDF',
        marginTop:25,
        justifyContent:'space-evenly',
        borderRadius:6,
        padding:2,
        marginRight:6,
        
    },

    indicator:{
       
        height:5,
        width:5,
        borderRadius:5/2,
        borderWidth:1,
        borderColor:'black',
        marginRight:4
    },

    activeIndicator:{
        backgroundColor:'#C4C4C4',
        width:30
    },

    Flatlist_Style:{
        flexDirection:'row',
        padding:4,
        alignItems:'center',
        justifyContent:'center',
    }
})