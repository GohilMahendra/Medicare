import React from "react";
import { View,TextInput, Dimensions,ImageBackground,Text, TouchableOpacity } from "react-native";
import { useState } from "react/cjs/react.production.min";

const Login=()=>
{
    const {height,width}=Dimensions.get('screen')
    const inputHeight=height/12

    return(
        <View style={{flex:1,backgroundColor:"#7CB9E8",justifyContent:"center"}}>
            <ImageBackground 
            source={require('../../assets/images/docter_login.jpg')}
            style={{flex:1,
            opacity:0.5,
            justifyContent:"center",
            backgroundColor:"#007FFF",borderRadius:20}}>
                
              
                <View style={{flex:1,marginHorizontal:20,justifyContent:"center"}}>
                    <Text
                    style={{fontSize:30,fontWeight:'bold',color:'#fff',alignSelf:"center"}}
                    >MEDICARE</Text>
                    <TextInput
                    style={{
                        height:inputHeight,
                        marginBottom:20,
                        borderWidth:0.5,
                        borderRadius:20}}
                />

                    <TextInput
                    style={{
                        height:inputHeight,
                        borderWidth:0.5,
                        borderRadius:20}}
                />
                    <TouchableOpacity
                    style={{backgroundColor:"blue",alignContent:"center",height:50}}
                    >
                        <Text style={{color:"#fff",letterSpacing:2,fontSize:20}}>
                            Login
                        </Text>    
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )


}
export default Login