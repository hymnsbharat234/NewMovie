import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const url="https://api.themoviedb.org/3/movie/popular?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1"
const url1=""

const initialState={
   searchData: {
       result: 0,
       results:[],
       errors:false,
   }
}

export const HomeMovies=createAsyncThunk(
    "HomeMovies",
        async(body)=>{
            console.log("rocky")
            const result = await axios.get(url)
            
            return result.data

        }
    
)
// export const SearchMovies=createAsyncThunk(
//     "SearchMovies",
//         async(searchValue)=>{
//             console.log("search",searchValue)
//             const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1&include_adult=false&query=${searchValue}`)
//             console.log("result",result)
//             return result.data

//         }
    
// )
export const SearchMovies=createAsyncThunk(
    "SearchMovies",
        async(searchValue)=>{
            console.log("search",searchValue)
            // const headers={
            //     "x-rapidapi-key":"30a79d49e4msh60149164f98a8a5p16accdjsn3726a274f766",
            //     "x-rapidapi-host":"google-search3.p.rapidapi.com",
            //     "useQueryString": true
            // }
            // const result = await axios.get(`https://google-search3.p.rapidapi.com/api/v1/search/q=${searchValue}&num=100`,{
            //     headers:headers
            // })
            const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1&include_adult=false&query=${searchValue}`)
            console.log("result",result)
            return result.data

        }
    
)
export const TopRated=createAsyncThunk(
    "TopRated",
        async(body)=>{
            console.log("search",body)
            const result = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`)
            console.log("result",result)
            return result.data

        }
    
)
//https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed


const MovieReducer=createSlice({
    name:"Movies",
    initialState,
    reducers:{},
    extraReducers:{
        [SearchMovies.fulfilled]:(state, { payload:MoviesSearch})=>{
            console.log('search reducer',MoviesSearch)
            if(MoviesSearch.results.length>0){
                state.searchData.results=MoviesSearch.results
                state.searchData.result = 1 ; 
            }else{
               state.searchData.error=true
            }

        },      
        [HomeMovies.fulfilled]:(state, { payload:MoviesHolly})=>{
            if(MoviesHolly.status){
                state.MoviesHolly=payload
            }else{
                state.MoviesHolly=MoviesHolly
            }

        },
        [TopRated.fulfilled]:(state, { payload:TopHolly})=>{
            if(TopHolly.status){
                state.TopHolly=payload
            }else{
                state.TopHolly=TopHolly
            }

        },
    },
})
export default MovieReducer.reducer