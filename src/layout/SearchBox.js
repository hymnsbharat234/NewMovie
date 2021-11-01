import React from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import Icons from "react-native-vector-icons/Ionicons"

const SearchBox = (props) => {
    const{searchValue,setSearchValue} = props
    console.log(searchValue)
    return (
        <View>
           <View style={{marginTop:30,flexDirection:"row"}}>
              
              <View style={{height:50,backgroundColor:"#fff",borderRadius:10,flex:1,flexDirection:"row",
                          alignItems:"center",
          }}>
                  <Icons name="search" size={25} style={{marginLeft:20}}/>
                  <TextInput placeholder="search movies"value={searchValue} onChangeText={(event) =>setSearchValue()}
                  style={{fontSize:18,fontWeight:"bold",color:"black",flex:1,
                  paddingLeft:10}}/>
              </View>
              <View  style={{marginLeft:10,height:50,width:50,backgroundColor:"#4444",justifyContent:"center",alignItems:"center",borderRadius:10}}>
                  <Icons name="funnel-outline" size={30} color="#fff"/>

              </View>

          </View>
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({})
