import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginPage from "./login"
import SignUpPage from "./sigup"
const AuthStack =createNativeStackNavigator();


const AuthStacks = () => {
    return (
        <>
        <AuthStack.Navigator>
            <AuthStack.Screen component={LoginPage} name="login" options={{headerShown:false}}/>
            <AuthStack.Screen component={SignUpPage} name="signup"  options={{headerShown:false}}/>
        </AuthStack.Navigator>
        </>
    )
}

export default AuthStacks

const styles = StyleSheet.create({})
