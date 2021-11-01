import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,TextInput ,FlatList,TouchableOpacity,StatusBar} from 'react-native'
import { Formik } from 'formik';
import {TopRated} from "../Reducer/Movie"
import {useSelector,useDispatch} from "react-redux"
import MovieListPage from "./MovieLists"

const Add = ({navigation}) => {
   const dispatch=useDispatch()
  
    
   const{TopHolly}=useSelector((state)=>state.Movies)
   const Movie=TopHolly ? TopHolly.results:[]
   console.log(Movie)
   useEffect(() => {
		dispatch(TopRated());
      
	}, []);
   const renderLists=((item)=>{
      const{id,backdrop_path,original_language,
          original_title,overview,popularity,
          poster_path,release_date,
          title,vote_average,vote_count,}=item
      return (
          <MovieListPage id={id} backdrop_path={backdrop_path} title={title} poster_path={poster_path} navigation={navigation} overview={overview}/>
      )
  })

   
    return (
     
        <View style={{flex:1,backgroundColor:"orange"}}>
            <StatusBar barStyle="light-content" backgroundColor="orange"/>
        <View style={{height:60,}}>
           <Text style={{margin:10,fontSize:18,fontWeight:"bold",color:"#fff"}}>
              Top Rated Movie
           </Text>
        </View>
            <FlatList
        //  numColumns={1}
        //  columnWrapperStyle={{justifyContent:"space-between"}}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{
             marginTop:10,
             paddingBottom:50
         }}
        data={Movie}
       
        renderItem={({item})=>{
            return renderLists(item)
            }}
        keyExtractor={item=>{item.id}}
        /> 

           
           
        </View>
        
    )
}

export default Add

const styles = StyleSheet.create({})
