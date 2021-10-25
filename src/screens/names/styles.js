import { StyleSheet } from "react-native";

export default StyleSheet.create({

    logo_view:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
  
    },
  
      image:{
        
          height: 100,
          width:150,
         
        },
  
      content: {
          marginTop: 100,
          marginHorizontal:20,
          paddingVertical:10
  
        },
  
      emailcontent: {
          marginTop: 40,
          marginHorizontal:20,
          marginHorizontal:20,
          paddingVertical:10
  
        },  
  
  
       textcontent: {
          color: 'grey',
          
        },
  
        input: {
          alignItems:"center",
          marginHorizontal:20,
          borderBottomWidth: 1,
          borderBottomColor: '#a89f9f',
          paddingVertical:8
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