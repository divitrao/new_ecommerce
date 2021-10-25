import { StyleSheet } from "react-native";
import COLORS from "../../assets/themes/colors";

const mobileNumberStyles = StyleSheet.create({


    touch:{
        alignItems: 'center'
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

    icon:{
        marginBottom:8,
    },
    
      input: {
        borderBottomColor: '#a89f9f',
        flex: 1,
        fontSize: 20,
      },

      wrapper:{
        
        height: 42,
        borderColor: 'grey',
        borderBottomWidth: 1,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
      },
      error:{
          color: COLORS.danger,
          paddingTop:4,
          fontSize: 14,  
      },
      
    contentView: {
        marginTop: 30,
        alignItems: 'center',
      },
  
      content: {
        fontSize: 20,
      },
      
  
      imageView:{
        marginTop: 50,
        alignItems: 'center',
      },
      
      image:{
        height: 100,
      },
  
      subContent:{
          marginTop: 40,
          padding: 20
      },
  
      textContent: {
        color: 'grey',
      },
  
    
      phoneCode:{
        fontSize:20,
      }
  
})

export default mobileNumberStyles;