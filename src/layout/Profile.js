import React from 'react'
import { StyleSheet, Text, View,StatusBar,TouchableOpacity, Alert } from 'react-native'
import {Avatar} from "../Components/Avatar/index"
import ProfileImage from "../../assets/10.jpg"
import {firebase} from "./firebase"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PropTypes from 'prop-types';


const handleSignout= async()=>{
    try{
   await firebase.auth().signOut()
   console.log('Sign out sucessfully')
}catch(error){
    Alert.alert(error.message)
}
}
const Profile = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <StatusBar barStyle="light-content"backgroundColor="orange"/>
            <View style={{alignItems:"center",height:200,backgroundColor:"orange",marginTop:0}}>
           <View style={{marginTop:10}}>
            <Avatar
            source={ProfileImage}
            size={85}
            />
           
           
            </View>
            <View style={{marginTop:10,alignItems:"center"}}>
            <Text style={{color:"#212121",fontSize:17,fontWeight:"bold"}}>Surya G</Text>
            <Text style={{fontSize:14,color:"#212121",marginTop:5}}>Strength and Consultioing Coach</Text>
            <Text style={{marginTop:10,color:"grey"}}>View Profile</Text>
            </View>
        </View>
        <View>
            <View style={{marginTop:10}}>
                <TouchableOpacity style={{height:50,borderRadius:10,flexDirection:"row",backgroundColor:"orange",marginHorizontal:10}}>
                    <Icon name="home"
                    size={30}
                    style={{marginLeft:20,marginTop:10}}
                    
                    
                    />
                    <Text style={{marginLeft:30,marginTop:12,fontWeight:"bold",fontSize:20}}>Home</Text>
                   


                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleSignout}
                style={{height:50,borderRadius:10,marginTop:10,flexDirection:"row",backgroundColor:"orange",marginHorizontal:10}}>
                    <Icon name="weight-lifter"
                    size={30}
                    style={{marginLeft:20,marginTop:10}}
                    
                    
                    />
                    <Text style={{marginLeft:30,marginTop:12,fontWeight:"bold",fontSize:20}}>Logout</Text>
                   


                </TouchableOpacity>
                {/* 
                <TouchableOpacity style={{height:50,borderRadius:10,marginTop:10,flexDirection:"row",backgroundColor:"orange",marginHorizontal:10}}>
                    <Icon name="hamburger"
                    size={30}
                    style={{marginLeft:20,marginTop:10}}
                    
                    
                    />
                    <Text style={{marginLeft:30,marginTop:12,fontWeight:"bold",fontSize:20}}>Nutritions</Text>
                   


                </TouchableOpacity>
                <TouchableOpacity style={{height:50,borderRadius:10,marginTop:10,flexDirection:"row",backgroundColor:"orange",marginHorizontal:10}}>
                    <Icon name="account"
                    size={30}
                    style={{marginLeft:20,marginTop:10}}
                    
                    
                    />
                    <Text style={{marginLeft:30,marginTop:12,fontWeight:"bold",fontSize:20}}>Athlets</Text>
                   


                </TouchableOpacity>
                <TouchableOpacity style={{height:50,borderRadius:10,marginTop:10,flexDirection:"row",backgroundColor:"orange",marginHorizontal:10}}>
                    <Icon name="wallet"
                    size={30}
                    style={{marginLeft:20,marginTop:10}}
                    
                    
                    />
                    <Text style={{marginLeft:30,marginTop:12,fontWeight:"bold",fontSize:20}}>Payments</Text>
                   


                </TouchableOpacity>
                <TouchableOpacity style={{height:50,borderRadius:10,marginTop:10,flexDirection:"row",backgroundColor:"orange",marginHorizontal:10}}>
                    <Icon name="message"
                    size={30}
                    style={{marginLeft:20,marginTop:10}}
                    
                    
                    />
                    <Text style={{marginLeft:30,marginTop:12,fontWeight:"bold",fontSize:20}}>Message</Text>
                   


                </TouchableOpacity> */}
            </View>
        </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
