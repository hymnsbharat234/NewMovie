import React from 'react'
import ReactDOM from 'react-dom'
import { View, Text } from 'react-native'
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import App from "./App"
import MovieReducer from "./Reducer/Movie"
import MovieDetail from "./Reducer/MovieDetails"



const store=configureStore({
    reducer:{
        Movies:MovieReducer,
        film:MovieDetail
    }
})

const index=()=>{
    return(
        <>
        
        
  
                <Provider store={store}>
                <App />
                </Provider>
          
      
        
        </>
    )
}
export default index
