import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProfilePage from "../layout/Profile"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack=createNativeStackNavigator()

const Profile = () => {
    return (
      <>
      <Stack.Navigator>
          <Stack.Screen 
          
          component={ProfilePage} name="Profile" options={{headerShown:false}}/>
      </Stack.Navigator>
      </>
    )
}

export default Profile

const styles = StyleSheet.create({})
