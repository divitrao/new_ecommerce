import React from "react";
import { ScrollView,TouchableOpacity, Text, View, Image, Icon, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from "./styles"



const Getlocation = ({navigation}) => {
    return(
        <View style={styles.main_view}>
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

        
                <Text style={styles.title}>Your Location</Text>
                <View style = {styles.inline}>
                    <TextInput
                    placeholder="Types of your area"
                    />
              

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



export default Getlocation; 