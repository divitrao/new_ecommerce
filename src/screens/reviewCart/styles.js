import { StyleSheet } from "react-native";

export default  StyleSheet.create({
    button_decrement:{
        height:25,
        width:25,
        borderWidth:1,
        borderTopLeftRadius:6,
        borderBottomLeftRadius:6,
        alignItems:'center',
        paddingTop:10,
        borderColor:'rgba(240, 78, 35,0.2)'
        
        
    },
    button_increment:{
        height:25,
        width:25,
        borderWidth:1,
        borderBottomRightRadius:6,
        borderTopRightRadius:6,
        alignItems:'center',
        paddingTop:7,
        borderColor:'rgba(240, 78, 35,0.2)'

    },
    quantity:{
        width:26,
        height:25,
        borderWidth:1,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderColor:'rgba(240, 78, 35,0.2)'
    },
    quantity_bought:{

        color:'grey',
        fontSize:12,
        

    },
    boxes:{
        width:214,
        height:101,
        borderWidth:1,
        borderRadius:6,
        borderColor:'#E2E2E2',
        marginRight:15
    },
    box_title:{
        fontSize:18,
        paddingTop:5,
        paddingBottom:10
    },
    summary:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
        alignItems:'center'
    },

    main_view:{
        paddingLeft:5,
        paddingRight:5,
        flex:1,
        backgroundColor:'white',
    },
    item_list:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:10
    },
    add_more_sign:{
        flexDirection:'row-reverse',
        marginTop:10,
        backgroundColor:'rgba(229, 229, 229,0.4)',
        height:50,alignItems:'center'
    },

    percent_sign:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:19
    },
    h_stack:{paddingHorizontal:10,
        borderWidth:1,
        justifyContent:'space-around',
        marginHorizontal:6,
        borderRadius:5,
        borderColor:'#E2E2E2'
    },

    h_stack_recommendation:{
        paddingHorizontal:10,
        borderWidth:1,
        justifyContent:'space-around',
        marginHorizontal:6,
        borderRadius:5,
        borderColor:'#E2E2E2'
    }

})