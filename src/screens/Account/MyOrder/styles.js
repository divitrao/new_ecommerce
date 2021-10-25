import { StyleSheet } from "react-native";

export default StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 10
    },

    text: {
        fontSize: 3,
        
        color: '#000000a0',
        fontWeight: 'bold',
    },
    touch: {
        alignItems: 'center',
    },
    button: {
        borderRadius: 8,
        paddingHorizontal: 10,
        lineHeight: 0,

        width: 120,
        backgroundColor: '#f04f24',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },

    timeline_title:{
        fontSize:12,
        color:'#636363'
    },

    timeline_address:{ 
        marginHorizontal: 3 
    },
    main_upcoming_ordered_view:{
        flex:1
    },
    upcoming_order_title:{ 
        backgroundColor: '#E5E5E5', 
        height: 50, 
        paddingLeft:10 
    },

    divider_line:{
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E6E9',
        marginTop: 10,
        marginBottom: 10
    },

    reorder_button:{ 
        height: 35, 
        width: 100, 
        backgroundColor: '#F04E23', 
        borderRadius: 4 
    },

    reorder_button_text:{
         textAlign: 'center', 
         textAlignVertical: 'center', 
         lineHeight: 35, 
         color: 'white' 
        }
})