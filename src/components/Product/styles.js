import { StyleSheet } from "react-native";


const productStyles = StyleSheet.create({

stack:{
    marginVertical:5
},

hstack:{
    marginHorizontal:20
},

bodyCenter:{
    marginHorizontal:20
},

productsView:{
    marginHorizontal:4,
    flex:1
},

productsHstack:{
    justifyContent:'space-around',
    marginLeft:6,
    borderWidth:1,
    borderRadius:5,
    borderColor:'#E2E2E2',
},

productsSubView:{
    flex:1,
},

image:{
    height:"55%",
    marginTop:20,
    marginLeft:30
},

dropdownView:{
    marginLeft:20,
    margin:10
},

dropdown:{
    height:30,
    borderRadius:20,
},

mainContentVstack:{
    width:'70%',
    padding:5,
    marginTop:20,
},

mainContentView:{
    flexDirection:'row',
},

mainContentSubView:{
    flex:1,flexDirection:'row',width:1
},

imageText:{
    textDecorationLine:'line-through',
    fontSize:16,
    color:'#9A9A9A'
},

content:{
    width:200,
    fontSize:15,
    color:'#9A9A9A',
},

buttonView:{
    flex:1,
    alignItems:'flex-end',
    margin:10
},

button:{
    width:'65%',
    justifyContent:'space-around'
},

detailsCenter:{
    marginHorizontal:20,
    marginVertical:20,
},

heading:{
    padding:20,
    fontSize:13,
},

divider:{
    marginTop:20
}






});

export default productStyles