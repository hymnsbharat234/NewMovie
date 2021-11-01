import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddPage from "../layout/Add"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack=createNativeStackNavigator()

const Add = () => {
    return (
      <>
      <Stack.Navigator>
          <Stack.Screen 
          
          component={AddPage} name="Add" options={{headerShown:false}}/>
      </Stack.Navigator>
      </>
    )
}

export default Add

const styles = StyleSheet.create({})
