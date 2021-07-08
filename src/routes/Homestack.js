import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Address,home, Login } from "../screens";

const Homestack=()=>
{

    const mystack=createStackNavigator()

    return(
    <NavigationContainer>

        <mystack.Navigator
        initialRouteName="Login"
        >
            <mystack.Screen
            name="Login"
            component={Login}
            options
            =
            {
                {
                    headerShown:false
                }
            }
            
            >

            </mystack.Screen>
            <mystack.Screen
            
            component={home}
            name="home"
            options=
            {
                {
                    headerShown:false
                }
            }
            >
            </mystack.Screen>

            <mystack.Screen
            
            component={Address}
            name="Address"
            options=
            {
                {
                    headerShown:false
                }
            }
            >
            </mystack.Screen>
            
        </mystack.Navigator>
            
    </NavigationContainer>
    )
}
export default Homestack