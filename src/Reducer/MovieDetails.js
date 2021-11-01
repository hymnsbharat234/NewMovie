import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const initialState={
   
}

export const MoviesDetails=createAsyncThunk(
    "MoviesDetails",
    async(id)=>{
        console.log("move",id)
        let url1=`https://api.themoviedb.org/3/movie/${id}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US`
        const res=await axios.get(url1)
        
        return res.data
        
    }
)
export const MoviesReview=createAsyncThunk( 
    "MoviesReview",
    async(id)=>{
        let url2=`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1`
        const res1=await axios.get(url2)
        console.log("Rome",res1.data)
        return res1.data
    }


)

const MovieDetailReducer=createSlice({
    name:"filam",
    initialState,
    reducers:{},
    extraReducers:{

        [MoviesDetails.fulfilled]:(state, { payload:moviesDetails})=>{
            if(moviesDetails.status){
                state.moviesDetails=moviesDetails
            }else{
                state.moviesDetails=moviesDetails
            }
        
        },
        [MoviesReview.fulfilled]:(state, { payload:moviesReview})=>{
            if(moviesReview.status){
                state.moviesReview=moviesReview
            }else{
                state.moviesReview=moviesReview
            }
        
        },
       
    }
})
export default MovieDetailReducer.reducer
