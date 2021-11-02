import React from 'react'
import { View,Linking, Text,Dimensions,Image,TouchableOpacity, ImageBackground } from 'react-native'

import Icons from "react-native-vector-icons/FontAwesome5"
const MovieLists = (
    {id,
        link,description,
       
        title,navigation,flag}
) => {
 
    const width = Dimensions.get("screen").width/2-30
    return (
        <View style={{height:150,backgroundColor:"#cccccc4f",
      borderRadius:10,padding:10,borderBottomWidth:1,borderColor:"grey"
        }}>
            {/* <View style={{alignItems:"flex-end"}}>
                <View style={{width:30,
                height:30,borderRadius:15,alignItems:"center",justifyContent:"center",
              
                }}>
                <Icons name="heart" size={18}/>
                </View>
            </View> */}
            <TouchableOpacity>
            <View style={{height:130,alignItems:"center",flexDirection:"row",}}>
               
                <View style={{marginLeft:10}}>
                <Text style={{fontSize:15,fontWeight:"500",width:300,fontFamily:"system-ui",fontWeight:"bold",}}>{title}</Text>
                <Text style={{fontSize:9,fontWeight:"500",fontFamily:"system-ui",marginTop:5,width:250}}>{description}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <Text style={{color: 'blue'}}>
                 {link}
                 </Text>
                </TouchableOpacity>


                </View>
            </View>
         </TouchableOpacity>
            
         
        </View>
    )
}

export default MovieLists
