import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,FlatList,TextInput, TouchableOpacity,SafeAreaView,StatusBar } from 'react-native'
import {useSelector,useDispatch} from "react-redux"
import Icons from "react-native-vector-icons/Ionicons"
import SearchPage from "./SearchBox"


import {HomeMovies,SearchMovies} from "../Reducer/Movie"

import MovieListPage from "./MovieLists"
const Movies = ({navigation}) => {
    const dispatch=useDispatch()
  
    
    const{MoviesHolly, searchData}=useSelector((state)=>state.Movies)
    // const{SearchMovies}=useSelector((state)=>state.Movies)
    const searchedMovies= searchData.result === 0  ? false : true;
    let Movie = [];
    if(!searchedMovies)
    {
    Movie = MoviesHolly ? MoviesHolly.results:[]
    }
    else{
    Movie = searchData.results ? searchData.results : []
    }
    

    const categories=["Movies"]
    const [categoryIndex,setcategoryIndex]=useState(0)
    const [searchValue, setSearchValue] = useState('');

    
	// const getMovieRequest = async (searchValue) => {
    //     console.log(searchValue)
	// 	const url = `  https://api.themoviedb.org/3/search/movie?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1&include_adult=false&query=${searchValue}`;
      

	// 	const response = await fetch(url);
	// 	const responseJson = await response.json();

	// 	if (responseJson.Search) {
	// 		setMovies(responseJson.Search);
	// 	}
	// };
    useEffect(() => {
		dispatch(SearchMovies(searchValue));
	}, [searchValue]);

    console.log(searchValue,"hdvh");
  
   const CategoryList=()=>{
       return(
        <View style={styles.categoryContainer}>
        {categories.map((item,index)=>(
            <TouchableOpacity key={index} 
            activeOpacity={0.8}
            onPress={()=>setcategoryIndex(index)}>
            <Text  style={[styles.categoryText,categoryIndex==index && styles.categoryTextSelected]}>{item}</Text>
            </TouchableOpacity>
        ))}
       
    </View>
       )
   }
     
//    const handleSearch=() => {
//        setSearchValue(text)
//    }
const handleSearch = text => {
   
    setSearchValue(text);
  };
  
   
    useEffect((data)=>{
        dispatch(HomeMovies(data))
    },[])

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
        <>
              <SafeAreaView style={{
            flex:1,
           
            backgroundColor:"orange"
        }}>
                <StatusBar barStyle="light-content" backgroundColor="orange"/>
            <View style={styles.header}>
            {/* <View>
                    <Text style={{fontSize:25,fontWeight:"bold"}}>Welcome to</Text>
                    <Text style={{fontSize:38,fontWeight:"bold",color:"green",marginTop:-12}}>Movies App</Text>

                </View>
                <Icons name="beer-outline" size={24} color="#4caf50"/> */}

            </View>
            {/* <SearchPage searchValue={searchValue} setSearchValue={setSearchValue}/> */}
            <View style={{marginTop:30,flexDirection:"row"}}>
              
              <View style={{height:50,backgroundColor:"#fff",borderRadius:10,flex:1,flexDirection:"row",
                          alignItems:"center",
          }}>
                  <Icons name="search" size={25} style={{marginLeft:20}}/>
                  <TextInput placeholder="search movies"value={searchValue} onChangeText={(e) =>handleSearch(e)}
                  style={{fontSize:18,fontWeight:"bold",color:"black",flex:1,
                  paddingLeft:10}}/>
              </View>
              <View  style={{marginLeft:10,height:50,width:50,backgroundColor:"#4444",justifyContent:"center",alignItems:"center",borderRadius:10}}>
                  <Icons name="funnel-outline" size={30} color="#fff"/>

              </View>

          </View>
            {/* <CategoryList/> */}
            {/* <MovieListPage/>
             <MovieListPage/>
             <MovieListPage/> */}
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
            
        </SafeAreaView>
    

        
        
        
     

        </>
    )
}

export default Movies

const styles = StyleSheet.create({
    header: {
        marginTop:25,
        flexDirection:"row",
        justifyContent:"space-between",

    },
    categoryContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:30,
        marginBottom:30,
        marginHorizontal:10
    },
    categoryText:{
        fontSize:16,
        fontWeight:"bold",
        color:"grey"
    },
    categoryTextSelected:{
        color:"green",
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:"green"
    }
})
