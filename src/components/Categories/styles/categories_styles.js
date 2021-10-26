import { Pressable, StyleSheet } from "react-native";


const categoriesStyles = StyleSheet.create({

    mainView:{
        flex: 1,
    },
    image:{
        width:'25%',

    },
    itemView:{
        flex: 1,
        flexDirection: 'row', 
        width: 1
    },
    itemVStack:{
        width: '70%' ,
    },
    itemText:{
        textDecorationLine: 'line-through', fontSize: 16, color: '#9A9A9A' 
    },
    itemDiscount:{
        fontWeight: 'bold', color: 'white'
    },
    itemContent:{
        width: 200, fontSize: 15, color: '#9A9A9A', 
    },
    vegan:{
        marginVertical: 10, height: 10
    },
    veganImage:{
        height: 20, width: 50
    },
    ratingView:{
        paddingTop: 10,
    },
    ratingText:{
        color: "#24AF8E",
    },
    ratingImageText:{
        color: '#9A9A9A'
    },
    dropdownView:{
        flexDirection: 'row', alignItems: 'center'
    },
    dropdownSubView:{
        flex: 1, flexDirection: 'row', width: 1,
    },
    dropdown:{
        height: 30
    },
    button:{
        width: '65%', justifyContent: 'space-around'
    },
    buttonView:{
        flex: 1, flexDirection: 'row', width: 1, height: 29, justifyContent: 'center'
    },
    minusButton:{
        width: '23%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F04E23'
    },
    minusIcon:{
        flex: 1, flexDirection: 'row', color: 'white'
    },
    addButton:{
        width: '23%', justifyContent: 'space-around', backgroundColor: '#F04E23'
    },
    addIcon:{
        flex: 1, flexDirection: 'row', color: 'white'
    },
    cartView:{
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#F04E23',
        borderRadius: 5,
        height: 60
    },

    cartText:{
        textAlign: 'left', color: 'white', fontSize: 14, textAlignVertical: 'center'
    },

    navBar: {

        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#F04E23",
        padding: 10,
        borderRadius: 6,
        marginHorizontal: 15,
    
      },
      leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    
      },
      rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      rightIcon: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
        backgroundColor: 'white',
      },
      tagView:{
        justifyContent:'center',
        borderWidth:1, 
        borderRadius:10,
        borderColor:'#F04E23',
        height:25,
        width:100,
        marginTop:9
      },
    tagText:{
          color:"#24AF8E",alignItems:'center',paddingLeft:5,
    },
    tagImageText:{
        color:'#F04E23',alignItems:'center',fontSize:11
    }

})

export default categoriesStyles