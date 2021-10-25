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
        }
})