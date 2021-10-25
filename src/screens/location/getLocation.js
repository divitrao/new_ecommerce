import React from "react";
import { StyleSheet,ScrollView,TouchableOpacity, Text, View, Image, Icon, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
// import { TouchableOpacity } from "react-native-gesture-handler";



const Getlocation = ({navigation}) => {
    return(
        <View style={{backgroundColor:'white',flex:1}}>
        <ScrollView>
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>
        <View>
            <View style={styles.logo_view}>
               <Image  resizeMode='contain' source={require('../../assets/images/illustration.png')} />
            </View> 

            <View>
                <Text style={styles.content}>
                    Select Your Location
                </Text>
                <Text style={styles.description}>
                    Switch on your location to stay in tune with what's happening in your area
                </Text>
            </View>

          
            {/* <View style = {styles.inline}>  */}
                <Text style={styles.title}>Your Location</Text>
                <View style = {styles.inline}>
                    <TextInput
                    placeholder="Types of your area"
                    />
                {/* <Input
                  label = "Your Location"
                  placeholder="Types of your area"
                  icon={<Text> Auto Detect </Text>}
                  iconPosition="right"
                  />
                 */}

                <TouchableOpacity>
                <View style = {styles.your_location}>
                    <Image 
                     style={styles.location}
                        // alt = 'auto detect'
                        source={require('../../assets/images/vector-location.png')}
                    />
                    <Text style={styles.detect}> 
                        Auto-Detect
                    </Text>
                </View>
                </TouchableOpacity>
                    
            </View> 

            <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('homos')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Submit and Continue</Text>
            </View>
        </TouchableOpacity>
                


        </View> 
           </TouchableWithoutFeedback>

                 </ScrollView>

                 </View>

    )
}; 

const styles = StyleSheet.create({

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

    // Text: {
    //     fontFamily:"Inter"
    // },

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



export default Getlocation; 