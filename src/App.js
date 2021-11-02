import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,DarkTheme} from "@react-navigation/native"
import NavigationPage from "./layout/Navigation"
// import AuthPage from "./layout/AuthStack"
// import {firebase} from "../src/layout/firebase"
export default function App() {
  // const [currentUser,setCurrentUser]=useState(null)

  // const userHandler=user=>user? setCurrentUser(user):setCurrentUser(null)

  // useEffect(
  // ()=>firebase.auth().onAuthStateChanged(user=>userHandler(user)),
  // []
 
  // )
  return (
 <>
   
     <NavigationContainer >
     {/* {currentUser ? <AuthPage/> :   <NavigationPage/>} */}
    
     {/* {currentUser ? <NavigationPage/> :   <AuthPage/>} */}
       <NavigationPage/>
   
     {/* <Text>Hello</Text> */}
     </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
