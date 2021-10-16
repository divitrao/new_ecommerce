import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main_view:{
        flex:1,
        // backgroundColor:'red'
        
    },
    title:{
        
        padding:2
    },
    title_text:{
        
        fontSize:16,
        fontWeight:'bold'
        
    },

    list_view:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
        
        
        
    },


    content_box:{
        flex:1,
        width:104,
        height:116,
        borderWidth:1,
        marginHorizontal:5,
        marginVertical:5,
        alignItems:'center',
        paddingTop:10,
        borderRadius:9
    },


    content_text:{
        textAlign:'center',
        justifyContent:'center'
    }
})