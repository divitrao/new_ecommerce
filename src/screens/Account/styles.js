import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    home:{
        paddingTop:15,
        paddingHorizontal:10,
    },
    main_view:{
        backgroundColor:'white',
        flex:1
    },
    add_button:{
        marginHorizontal:10,
        paddingTop:15
    },
    address_card:{
        marginHorizontal:5,
        marginBottom:15
    },
    card_style:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    item_name:{
        flexDirection:'row',
        alignItems:'center'
    },
    text_item_name:{
        marginHorizontal:7, 
        fontWeight:'600',
        fontSize:16,
        paddingVertical:8
    },
    default_style:{
        borderWidth:1,
        paddingHorizontal:3,
        borderRadius:20,
        borderColor:'#F04E23',
        backgroundColor:'rgba(240, 78, 35, 0.1)'
    },
    default_text_style:{
        marginHorizontal:5,
        color:'#F04E23'
    }
})
