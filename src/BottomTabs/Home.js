import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomePage from "../layout/MoviesIndex"

import Movieslist from "../layout/MovieLists"
import MovieReviewPage from "../layout/MoviesReviews"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack=createNativeStackNavigator()

const Home = () => {
    return (
      <>
      <Stack.Navigator>
          <Stack.Screen component={HomePage} name="Home" options={{headerShown:false}}/>
          {/* <Stack.Screen component={MoviesDetailsPage} name="MoviesDetailsPage" /> */}
              <Stack.Screen component={MovieReviewPage} name="MovieReviewPage" />
      </Stack.Navigator>
      </>
    )
}

export default Home

const styles = StyleSheet.create({})
