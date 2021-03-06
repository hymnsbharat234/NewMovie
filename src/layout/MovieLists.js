import React from 'react'
import { View,Linking, Text,Dimensions,Image,TouchableOpacity, ImageBackground } from 'react-native'

import Icons from "react-native-vector-icons/FontAwesome5"
const MovieLists = (
    {id,backdrop_path,original_language,
        original_title,overview,popularity,
        poster_path,release_date,
        title,vote_average,vote_count,navigation,flag}
) => {
 
    const width = Dimensions.get("screen").width/2-30
    return (
        <View style={{height:180,backgroundColor:"#cccccc4f",
      borderRadius:10,padding:10,borderBottomWidth:1,borderColor:"grey"
        }}>
            {/* <View style={{alignItems:"flex-end"}}>
                <View style={{width:30,
                height:30,borderRadius:15,alignItems:"center",justifyContent:"center",
              
                }}>
                <Icons name="heart" size={18}/>
                </View>
            </View> */}
            <TouchableOpacity onPress={()=>navigation.navigate("MoviesDetailsPage",{id:id})}>
            <View style={{height:170,alignItems:"center",flexDirection:"row",}}>
            <Image source={{uri:`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}} style={{width:100,height:80,borderRadius:5}}/>
                <View style={{marginLeft:10}}>
                <Text style={{fontSize:15,fontWeight:"500",width:300,fontFamily:"system-ui",fontWeight:"bold",}}>{title}</Text>
                <Text style={{fontSize:9,fontWeight:"500",fontFamily:"system-ui",marginTop:5,width:220}}>{overview}</Text>
                {/* <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <Text style={{color: 'blue'}}>
                 {link}
                 </Text>
                </TouchableOpacity> */}


                </View>
            </View>
         </TouchableOpacity>
            
         
        </View>
    )
}

export default MovieLists
