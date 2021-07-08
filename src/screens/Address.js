import React from "react";

import { View ,Text} from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";



const Address=()=>
{


    MapboxGL.setAccessToken('pk.eyJ1IjoibWFoZW5kcmFnb2hpbCIsImEiOiJja3EwZnV0Ym8wNGNzMndwaGZqZnB2aWJiIn0.hUfo_Ii9qcCmUzNekkLs3Q')
return(
        <View style={{flex:1}}>
            <Text>TESTING MAP</Text>

            <MapboxGL.MapView
            style={{flex:1}}

            
            >
                <MapboxGL.MarkerView>
                    
                </MapboxGL.MarkerView>
               

            </MapboxGL.MapView>
        </View>
    )

}



export default Address