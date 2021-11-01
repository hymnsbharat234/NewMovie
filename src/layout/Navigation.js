import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"


import NotificationPage from "./Noti"
import TabsScreen from "../BottomTabs/Tabs"
import MoviesDetailsPage from "./MoviesDetails"

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <>
     <Stack.Navigator>
     <Stack.Screen  component={TabsScreen } name="Tabs" options={{
             headerShown:false,
             
         }}/>
           <Stack.Screen  component={MoviesDetailsPage } name="MoviesDetailsPage" options={{
               title:"Movie Details",
            headerStyle:{
                backgroundColor:"orange",
               
                
            },
            headerTintColor:"#fff"
             
         }}/>
          <Stack.Screen  component={NotificationPage} name="Noto" options={{
             headerShown:false,
             
         }}/>
       
          
         
      
     </Stack.Navigator>
     {/* <Text>Hell</Text> */}
        </>
    )
}

export default Navigation

const styles = StyleSheet.create({})
