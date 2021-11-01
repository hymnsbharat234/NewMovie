
import React,{useEffect,useState} from 'react'
import {Text,View,StyleSheet,Image,FlatList,ActivityIndicator , ToastAndroid,TouchableOpacity,StatusBar,SafeAreaView,Platform, ScrollView} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import {useDispatch,useSelector} from "react-redux"
import Icons from "react-native-vector-icons/FontAwesome5"
import IconsName from "react-native-vector-icons/Entypo"
import {MoviesDetails} from "../Reducer/MovieDetails"
import {Card} from "react-native-paper"

const MoviesDetail = ({route,navigation}) => {
    const dispatch=useDispatch();
    let flag =false
    const id=route.params.id
  
   
    const{moviesDetails} = useSelector((state)=>state.film)

    useEffect(()=>{
        dispatch(MoviesDetails(id))
    },[id,moviesDetails])

    if(moviesDetails){
        flag=true

    }
    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          "Added to Favourite",
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        );
      };

   

if(flag){
    const{backdrop_path,id,poster_path,original_language,release_date,title,vote_average,overview,}=moviesDetails


    return (
       
        <SafeAreaView style={{
            flex:1,backgroundColor:"#fff"}}>
                <StatusBar barStyle="light-content" backgroundColor="orange"/>
               
                <View style={{flex:1, position: 'relative'}}>
               
                    <Image source={{uri:`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}} style={{width:"100%",resizeMode:"cover",flex:1}}/>
                    <Card style={{backgroundColor:"rgba(52,52,52,0.8)",height:220,width:"98%",bottom:30,left:0,marginHorizontal:5,
                    marginTop:10,paddingTop:30,position:"absolute"
                }}>
                     <ScrollView>
                     <View style={{marginLeft:20,flexDirection:"row"}}>
                        <Text style={{fontSize:22,fontWeight:"bold",color:"#fff",marginHorizontal:10}}>{title}</Text>
                        
                    </View>
                    <View style={{marginTop:5}}>
                            
                            <View style={{marginLeft:30}}>
                                <Text style={{color:"#fff"}}>{release_date}</Text>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{marginLeft:30,marginTop:5,flexDirection:"row"}}>
                                <Icons name="crown" size={15} color="#fff"/>
                                <Text style={{fontSize:15,marginLeft:10,color:"#fff"}}>{vote_average}</Text>
                            </View>
                            <View style={{marginLeft:30,marginTop:5,flexDirection:"row",marginRight:30}}>
                                <IconsName name="language" size={17} color="#fff"/>
                                <Text style={{fontSize:15,marginLeft:10,color:"#fff"}}>{original_language}</Text>
                            </View>
                            </View>
                            <View style={{marginLeft:20,marginTop:5}}>
                            <Text style={{fontSize:15,fontWeight:"bold" ,color:"#fff"}}>OverView-:</Text>
                            <Text style={{fontSize:15,fontWeight:"bold" ,color:"#fff"}}>{overview}</Text>
                            </View>

                            
                            </View>
                    {/* 
                    <View style={{marginTop:10,marginLeft:20}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>About Movie :-</Text>
                       
                        <View style={{marginTop:5,marginLeft:10,}}>
                            
                           <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:15,fontWeight:"bold" ,}}>OverView</Text>
                            <Icons name="share" size={20} style={{marginLeft:10}}/>
                            
                            </View>
                            <View style={{marginLeft:10}}>
                                <Text>{overview}
                                </Text>
                            </View>
                           
                            
                            <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{fontSize:15,fontWeight:"bold" ,}}>language</Text>
                            <Icons name="share" size={20} style={{marginLeft:10}}/>
                            <View style={{marginLeft:10}}>
                                <Text style={{fontSize:15,fontWeight:"bold" ,}}>{original_language}</Text>
                            </View>
                            
                            </View>
                           
                        </View>
                        
                        

                    </View> */}
                    </ScrollView>

                </Card> 
                  
                </View>
                 {/* <View style={{width:90,height:25,backgroundColor:"#4caf50d6",borderBottomRightRadius:10,borderTopRightRadius:10}}>
                    <TouchableOpacity styles={{borderWidth:1}} onPress={()=>navigation.navigate("MovieReviewPage",{id:id})}>
                        <Text style={{fontWeight:"bold", color:"#fff"}}>More Details</Text>
                    </TouchableOpacity>
                    </View>  */}
               
                
       

        </SafeAreaView>
    )
            }else{
                return(
                    <View style={{flex: 1,justifyContent: 'center'}}>
                        <ActivityIndicator size={45} color="black"/>
                    </View>
                        
                        )
            }
}

export default MoviesDetail

const styles = StyleSheet.create({})
