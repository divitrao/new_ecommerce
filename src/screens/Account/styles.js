import { StyleSheet,StatusBar } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:'white',
        paddingHorizontal:12
      },
      item: {
        padding: 8,
        marginVertical: 8},
    
    icons:{
        width:24,
        height:24,
        backgroundColor:'#F2F1F2',
        alignItems:'center',
        borderRadius:5
        },
    
        main_view:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:20
        },
        pencil_icon:{
            backgroundColor:'#F2F1F2',
            width:24,height:24,
            alignItems:'center',
            borderRadius:5
        },
        title:{
            flex: 1, 
            height: 1, 
            backgroundColor: '#E5E6E9',
            marginBottom:10,
            marginTop:10
        },
        
        
//  styles of my_address
        
    home:{
        paddingTop:15,
        paddingHorizontal:10,
    },
    main_address_view:{
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