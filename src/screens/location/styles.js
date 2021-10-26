import { StyleSheet } from "react-native";

export default StyleSheet.create({

    main_view:{
        backgroundColor:'white',
        flex:1
    },
    
    logo_view:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      marginTop:100
  
    },
    content: {
        marginTop: 30,
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center"
    },
    description: {
        color:'grey',
        padding:10,
        paddingHorizontal:30,
        textAlign:"center"
    },
    
    title:{
        color:'grey',
        marginTop: 20,
        marginHorizontal:20,

    },
     
    inline:{
        flexDirection: 'row',
        alignItems:"center",
        borderBottomWidth: 1,
        marginHorizontal:20,
        borderBottomColor: '#a89f9f',
        paddingVertical:-15,
        justifyContent:'space-between'
        

    },
    your_location:{
        flexDirection:'row',
        alignItems:"center",
        
    },
    detect:{
        color:'grey'
    },
    touch: {
        alignItems: 'center'
    },
    
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 220,
        margin: 'auto',
        marginTop: 50,
        backgroundColor: '#f04f24',
        
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    }


}) 