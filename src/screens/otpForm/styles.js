import { StyleSheet } from "react-native";

export default StyleSheet.create({
    input:{
        borderBottomWidth:2,
        // borderBottomColor:'black',
        padding:10,
        fontSize:18,
        borderRadius:6,
        width:50,
        alignContent:'center',
        textAlign:'center'

    },

    main_view:{
        display:'flex',
        flexDirection:'column',
        justifyContent : 'center',
        margin:'auto',
        marginTop:20
    },

    input_view:{
        flexDirection:'row',
        justifyContent:'center'
    },

    buttons:{
        marginTop:30,
        justifyContent:'center',
        width: 180,
    },
    touch:{
        alignItems: 'center',
    },
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 220,
        marginTop: 50,
        backgroundColor: '#f04f24',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
      errorText:{
          color:'red',
          textAlign:'center'
      },
      errorView:{
          marginTop:20
      },
      success:{
          color:'green',
          textAlign:'center'
      }
})