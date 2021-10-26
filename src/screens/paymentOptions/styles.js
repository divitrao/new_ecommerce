import { StyleSheet } from "react-native";

export default StyleSheet.create({

    orderPlaced_main_view:{
        backgroundColor:'white',
        flex:1

    },
    
    orderImage:{
        alignItems:'center',
        marginTop:100

    },
    trackbuttonText: {
       color:'white',
        fontSize: 14,
        textAlign: 'center',
      },
      backbuttonText: {
        color:'black',
         fontSize: 14,
         textAlign: 'center',
         textDecorationLine:'underline'
         
       },

      trackbutton:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 220,
        height:48,
        margin: 'auto',
        marginTop: 35,
        backgroundColor: '#f04f24',
        
    },
    touch: {
        alignItems: 'center'
    },

    backbutton:{
        marginTop:15,
        width:93,
        height:17,
        
    
    },
    orderText:{
        paddingHorizontal:80,
        fontWeight:'700',
        fontSize:20,
        marginTop: 30,
        fontWeight:"bold",
        textAlign:"center"

    },
    orderDescription:{
       
        fontWeight:'400',
        fontSize:14,
        color:'grey',
        padding:10,
        paddingHorizontal:80,
        
        textAlign:"center"
    },


    paymentOption_main_view:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:'white'
    },

    header:{
        
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingTop:10,
        alignContent:'flex-start'

    },

    sidearrow:{
        paddingVertical:5
        
    },

    amount_flex:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'flex-start',
        paddingHorizontal:10,
        paddingTop:20
    },

    amt:{
        fontSize:16,
        fontWeight:'400'
    },
    amt_text:{
        fontWeight:"400", 
        fontSize:10 
    },
    deliveryfrom:{
        paddingTop:15,
        paddingHorizontal:10,
        
    },
    deliveryto:{
        paddingTop:15,
        paddingHorizontal:10,
    },
    address:{
            fontSize:12,
            fontWeight:'400',
            paddingHorizontal:30,
            textAlign:"left"

    },
    payment_methods:{
        flexDirection:'row',
        padding:10,
        fontWeight:"400", 
        fontSize:12
    },
    your_payment_methods:{
        // marginHorizontal:20,
        width: 34,
        height: 24,
        marginLeft:20
    },
    more_payment_methods:{
        marginHorizontal:20,
        

    },
    view_more_payment_methods:{
        flexDirection:'row',
        justifyContent:'space-between'
        ,padding:10,
        alignItems:'center'
    },
    text_more_payment_methods:{

        fontWeight:"500",
         fontSize:10, 
         padding:15, 
         paddingVertical:25
    },

    radiobutton:{
        marginLeft:85,
        justifyContent:'flex-end'
        
        
    }, 
    radiobutton_view:{
        marginRight:20
    },
    collapse:{
        marginLeft:135,
        width: 10,
        
    },
    paybutton:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingTop:10,
        marginLeft:100
    },
    savingRupee:{
        fontWeight:"400", 
        fontSize:10, 
        color:'green' 
    },
    rupeeImage:{
        height:10, 
        tintColor:'green'
    },
    deliveryIcon:{
        marginTop:10, 
        position:'absolute'
    },
    deliveryIcon_style:{
        color:'grey',
         paddingLeft:30
    },
    deliverySlot:{
        color:'grey',
         paddingLeft:30
    },
    text_YourPaymentMethod:{
        fontWeight:"500", 
        fontSize:10, 
        padding:10, 
        paddingVertical:20
    },
    payment_view:{
        flexDirection:'row',
        paddingVertical:15, 
        justifyContent:'space-between'
    },

    card:{
        marginTop:25,
        alignSelf:'center',
        backgroundColor:'rgba(240, 78, 35, 0.1)',

        
    },
    wallet_rupee_image:{
        width:16,
        height:16,
        padding:10,
        margin:10
    },
    wallet_view:{
        flexDirection:'row',
        width:38, 
        height:17,
        marginVertical:4
    },
    earn_more:{
        tintColor:'blue',
        height:6,
        width:4, 
        marginTop:5,
        marginLeft:4
    },
    payment_method_view:{
        fontWeight:"500", 
        fontSize:14,
         padding:15,
         marginTop:15,
         paddingVertical:20
    },


    



    




})


