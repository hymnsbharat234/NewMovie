
import React,{useEffect,useState,useRef} from 'react'
// import { Video, AVPlaybackStatus } from 'expo-av';
import {Text,View,StyleSheet,Image,ToastAndroid,FlatList,ActivityIndicator,Button, TouchableOpacity,StatusBar,SafeAreaView,Platform, ScrollView} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import {useDispatch,useSelector} from "react-redux"
import Icons from "react-native-vector-icons/FontAwesome5"
import {MoviesReview} from "../Reducer/MovieDetails"

const MoviesRev= ({route,navigation}) => {
    const dispatch=useDispatch();
    const video = useRef(null);
    const [status, setStatus] = useState({});
    let flag =false
    const id=route.params.id
  
  
    console.log("max",id)
    const{moviesReview} = useSelector((state)=>state.film)
    const Movies=moviesReview ? moviesReview.results:[]

    useEffect(()=>{
        dispatch(MoviesReview(id))
    },[id,Movies])

    if(Movies){
        flag=true

    }
    

    const renderList=({author,content})=>{
        return (
            <View>
            <ScrollView>
                    
                    <View style={{marginTop:10,marginLeft:20}}>
                       
                       
                        <View style={{marginTop:5,marginLeft:10,}}>
                            
                           <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:15,fontWeight:"bold" ,}}>Author Name</Text>
                            <Icons name="share" size={20} style={{marginLeft:10}}/>
                           
                            
                            </View>
                            <Text style={{marginLeft:20,fontSize:15,fontWeight:"bold",color:"#f44336"}}>{author}</Text>
                            
                            <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{fontSize:15,fontWeight:"bold" ,}}>Content</Text>
                            <Icons name="share" size={20} style={{marginLeft:10}}/>
                            <Text>
                            
                             </Text>
                            
                            </View>
                            
                            <Text style={{marginLeft:20,fontSize:15}}>{content}</Text>
                            
                            
                           
                        </View>
                        
                        

                    </View>
                    </ScrollView>
           
            </View>
        )
    }

   

if(flag){
    const{author,id,title}=Movies
    //'https://content.jwplatform.com/manifests/yp34SRmf.m3u8'
    //http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4


    return (
        <SafeAreaView style={{
            flex:1,backgroundColor:"#fff"}}>
                <View style={{paddingHorizontal:20,
                marginTop:25,flexDirection:"row",justifyContent:"space-between"
                }}>
                    <Icon name="arrow-back-outline" size={28} onPress={()=>navigation.goBack()} />
                    

                </View>
                <View style={{flex:0.45,marginTop:25,justifyContent: 'center',alignItems:"center",}}>
                    
                   
                {/* <Video
            ref={video}
            style={styles.video}
            source={require('../../../assets/warcraft.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      /> */}
                </View>
                <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
                
               
                <View style={{flex:0.55,backgroundColor:"#9e9e9e47",
                    marginTop:10,paddingTop:30,borderTopStartRadius:20,borderTopRightRadius:20
                }}>
                    <View style={{marginLeft:20,flexDirection:"row"}}>
               
                        <Text style={{fontSize:17,paddingTop:5,paddingLeft:8,}}></Text>
                    </View>
                    <Text style={{fontSize:18,fontWeight:"bold",marginLeft:20}}>Review Movie :-</Text>
                    <FlatList
               
         
                data={Movies}
       
                renderItem={({item})=>{
                 return renderList(item)
             }}
        keyExtractor={item=>{item.id}}
        />
                     

                </View>
                

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

export default MoviesRev

const styles = StyleSheet.create({
   
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
})
