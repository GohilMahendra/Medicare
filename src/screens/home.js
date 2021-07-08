import React from "react";
import { View ,Text, Dimensions,TextInput, Image,TouchableOpacity} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const home=()=>
{

    
    const {height,width}=Dimensions.get('screen')
    return(
    <View style={{flex:1,marginHorizontal:20}}>
        <View style={{flexDirection:"row",alignItems:"center",
            height:'10%',
            justifyContent:"space-between",
        }}>
        <FontAwesome5
        
        
        >

        </FontAwesome5>
        <TouchableOpacity>
        <Image
        style={{height:50,width:50,borderRadius:30,backgroundColor:"#fff"}}
        source={require('../../assets/images/doc.png')}
        >


        </Image>
        </TouchableOpacity>
        </View>
        <View style={{width:'100%',alignItems:"center",
        
        justifyContent:"space-between",marginVertical:10,height:75,
        
        borderRadius:20,backgroundColor:'#fff',
        flexDirection:"row"}}>
       
        <FontAwesome5
            style={{marginLeft:10}}
            name="search" size={20}
            color='blue'
            >

            </FontAwesome5>

        <TextInput
       
        style={{flex:1,color:"blue"}}
        placeholder="search here.."
        placeholderTextColor="blue"

        >
           
        </TextInput>
        
        
        </View>
        <View style={{flexDirection:'row',
            justifyContent:"space-between",width:"100%",
            height:75,
            alignItems:"center"}}>
            <Text style={{fontSize:18,fontWeight:"bold"}}>UPCOMING SCEDULES</Text>


            <TouchableOpacity>
                <FontAwesome5
            name="filter"
            color="blue"
            size={20}
            >

            </FontAwesome5>
           </TouchableOpacity>
        </View>
        <View style={{height:height/4,
            flexDirection:"row",
            alignItems:"center",
            backgroundColor:"#FF5733",
            borderRadius:30}}>
        <Image
        source={require('../../assets/images/doc.png')}
        style={{width:'50%',height:"100%"}}
        >

        </Image>
        <View >
            <Text style={{color:"#fff",fontStyle:"italic",}}>
                COVID 19 vaccinations are in
            </Text>
        </View>
        </View>

        
    </View>
    )
}
export default home