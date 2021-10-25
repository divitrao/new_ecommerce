import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    card_view:{
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
        marginRight:4,
        backgroundColor:'#F04E23'
    },

    activeIndicator:{
        backgroundColor:'#F04E23',
        width:30
    },

    Flatlist_Style:{
        flexDirection:'row',
        padding:4,
        alignItems:'center',
        justifyContent:'center',
    }
})