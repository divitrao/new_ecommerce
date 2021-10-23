import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity } from "react-native";
 import Profile from '../../assets/profile_pic/profile_pic.svg'
 import Pencil from '../../assets/pencil/pencil.svg'
 import Cart from '../../assets/Account/cart.svg'
 import Bell from '../../assets/Account/bell.svg'
 import Location from '../../assets/Account/location.svg'
 import Returns from '../../assets/Account/returns.svg'
 import Rupee from '../../assets/Account/rupee.svg'
 import Share from '../../assets/Account/share.svg'
 import Star from '../../assets/Account/star.svg'
 import Support from '../../assets/Account/support.svg'
 import Navigation_icon from '../../assets/Account/navigate_icon.svg'


const Account = ({navigation}) => {

    
    const DATA = [
        {
            title:'My information',
            data:[
                {
                    id:1,
                    relative_image:<Cart />,
                    content:'My Orders',
                    right_arrows:<Navigation_icon />,
                    navigate_route:'my_order'
                },
                {
                    id:2,
                    relative_image:<Location />,
                    content:'My Address',
                    right_arrows:<Navigation_icon />,
                    navigate_route:'myAddress'
                },
                {
                    id:3,
                    relative_image:<Rupee />,
                    content:'My Wallet & Payments',
                    right_arrows:<Navigation_icon />,
                    navigate_route:'walletAndPayment'
                },
                {
                    id:4,
                    relative_image:<Returns />,
                    content:'Returns & Refunds',
                    right_arrows:<Navigation_icon />,
                    navigate_route:'account'
                },
                {
                    id:5,
                    relative_image:<Bell />,
                    content:'Notifications',
                    right_arrows:<Navigation_icon />,
                    navigate_route:'account'
                },
            ]
        },
        {
            title:'Offers and Coupouns',
            data:[
                {
                    id:1,
                    relative_image:<Share />,
                    content:'Share & Earn',
                    right_arrows:<Navigation_icon />,
                    navigate_route:'account'
                },
                {
                    id:2,
                    relative_image:<Rupee/>,
                    content:'Offer & Coupon Zone',
                    right_arrows:<Navigation_icon />,
                    navigate_route:'account'
                },
            ]
        },

        {
            title:'Miscellaneous',
            data:[
                {
                    id:1,
                    relative_image:<Support />,
                    content:'Customer Support',
                    right_arrows:<Navigation_icon />,
                    navigate_route:'account'
                },
                {
                    id:2,
                    relative_image:<Star />,
                    content:'Rate Us',
                    right_arrows:<Navigation_icon />,
                    navigate_route:'account'
                },

                'About',
                'Legal Policies'
            ]
        },

    ]





const Item = ({ title }) => (
    <View>
        <TouchableOpacity onPress={()=>navigation.navigate(title.navigate_route)}>
   {title.id && <View style={[styles.item,{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
          
              <View style={{flexDirection:'row'}}>
                <View style={{width:24,height:24,backgroundColor:'#F2F1F2',alignItems:'center',borderRadius:5}}>
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
    {!title.id && <View style={styles.item}>
        <Text>{title}</Text>
        </View>}
        </TouchableOpacity>
    </View>
 
);





    return(

        <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
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
               <View style={{backgroundColor:'#F2F1F2',width:24,height:24,alignItems:'center',borderRadius:5}}>
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
            <View style={{flex: 1, height: 1, backgroundColor: '#E5E6E9',marginBottom:10,marginTop:10}} />
            <View style={{marginBottom:10}}>
                <Text style={{fontSize:11,color:'grey'}}>{title}</Text>
            </View>
            </View>
        )}
      />
    </SafeAreaView>
    )
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor:'white',
    paddingHorizontal:12
  },
  item: {
    padding: 8,
    marginVertical: 8}
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: "#fff"
//   },
//   title: {
//     fontSize: 24
//   }
});

export default Account;