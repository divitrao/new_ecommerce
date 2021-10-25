import React from "react";
import { Text, View, SafeAreaView, SectionList, TouchableOpacity } from "react-native";
import Profile from '../../assets/profile_pic/profile_pic.svg'
import Pencil from '../../assets/pencil/pencil.svg'
import account_styles from './account_styles'
import { DATA } from "../../api/data";

const Account = ({navigation}) => {


const Item = ({ title }) => (
    <View>
        <TouchableOpacity onPress={()=>navigation.navigate(title.navigate_route)}>
   {title.id && <View style={[account_styles.item,{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
          
              <View style={{flexDirection:'row'}}>
                <View style={account_styles.icons}>
                    <View style={{marginVertical:5}}>{title.relative_image}</View>
                </View>
                <View style={{marginLeft:10}} >
                    <Text style={{fontSize:15}}>{title.content}</Text>
                </View>
             </View>
              <View>
                 <Text>{title.right_arrows}</Text>
              </View>
    </View>}
    {!title.id && <View style={account_styles.item}>
        <Text>{title}</Text>
        </View>}
        </TouchableOpacity>
    </View>
 
);





    return(

        <SafeAreaView style={account_styles.container}>
        <View style={account_styles.main_view}>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <View>
                       <View>
                           <Profile />
                       </View>
                   </View>
                   <View style={{paddingLeft:10}}>
                       <View>
                           <Text style={{fontSize:14}}>Yodaplus</Text>
                       </View>
                       <View>
                           <Text style={{fontSize:10,color:'grey'}}>9144444444</Text>
                       </View>
                   </View>
                   <View></View>
               </View>
               <View style={account_styles.pencil_icon}>
                   <View style={{marginVertical:5}}>
                   <Pencil />
                   </View>
             </View>
        </View>
        
      <SectionList
      showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
            <View>
            <View style={account_styles.title} />
            <View style={{marginBottom:10}}>
                <Text style={{fontSize:11,color:'grey'}}>{title}</Text>
            </View>
            </View>
        )}
      />
    </SafeAreaView>
    )
}
 




export default Account;