import { StyleSheet } from "react-native"
export default StyleSheet.create({

    main_flex:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    left_hand_side:{
        flexDirection:'row',
        padding:6
    },
    address:{
        fontSize:12,
        color:'grey',
    },

    dropdown_and_address:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        
    },
    dropdown_and_time:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#f7e1e1',
        borderRadius:5,
        padding:6

    },

    time_title:{
        fontSize:12,
        color:'grey',
        alignItems:'center',

    }
})