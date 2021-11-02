import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,Image,StatusBar,Alert, TouchableOpacity, TextInput } from 'react-native'
import {Formik} from "formik"
import * as Yup from "yup"
import Validator from "email-validator"
import {firebase} from "./firebase"
const login = ({navigation}) => {
    const loginFormSchema=Yup.object().shape({
        email:Yup.string().email().required("An email is required"),
        password:Yup.string()
        .required()
        .min(8,"Your Password has to have at least 8 Character")
    })
    const onLogin=async (email, password) => {
        try{
         const res=  await firebase.auth().signInWithEmailAndPassword(email, password)
           console.log("fireBase login Sucessful",email,password)
        }catch(error){
            
            Alert.alert("My Lord...",
            error.message + '\n\n....',
            [
                {
                    text: 'OK',
                    onPress:()=>console.log("OK"),
                    style:"cancel"
                },
                {
                    text:"Sign Up",onPress:()=>navigation.push("signup")
                }

            ]
            )
        }
    }
    return (
        <View style={{flex: 1,backgroundColor:"#97f5f7"}}>
            <StatusBar barStyle="dark-content" backgroundColor="#97f5f7"/>
            <Formik initialValues={{email: "", password: "",}}
            onSubmit={(values)=>{
               onLogin(values.email, values.password)
            }}
            validationSchema={loginFormSchema}
            validateOnMount={true}
            >
               {({handleChange,handleBlur,handleSubmit,values,isValid})=>(
                   <>
                  
           <View style={{alignItems:"center",marginTop:10}}>
              
               <View style={{marginTop:100}}>
                   <Text style={{fontSize:24,color:"#31797b",padding:10,fontWeight:"bold"}}>Sigin</Text>
                   <TouchableOpacity style={{width:300,height:40,backgroundColor:"#fff",borderRadius:20,
                   
                   borderColor:values.email.length<1 || Validator.validate(values.email) ? "#ccc":"red"}}>
                       <TextInput

                       keyboardType="email-address"
                       autoFocus={true}
                       onChangeText={handleChange("email")}
                       onBlur={handleBlur("email")}
                       value={values.email}
                    
                       autoCapitalize="none"
                       placeholder="Enter your Email"
                       style={{width:"100%",paddingLeft:20,paddingTop:7}}
                       />
                   </TouchableOpacity>
                   <TouchableOpacity style={{width:300,height:40,marginTop:10, backgroundColor:"#fff",borderRadius:20}}>
                       <TextInput
                         autoCapitalize="none"
                         onChangeText={handleChange("password")}
                       onBlur={handleBlur("password")}
                       value={values.password}
                    
                       secureTextEntry
                       autoCorrect={false}
                       placeholder="Enter your password"
                       style={{width:"100%",paddingLeft:20,paddingTop:7}}
                       />
                   </TouchableOpacity>
                   <Text style={{padding:5,color:"#FF1515"}}>Forgot Psssword</Text>
                   <TouchableOpacity 
                   onPress={handleSubmit}
                   disabled={!isValid}
                   style={{width:300,height:40,marginTop:10, backgroundColor:"#24afb3",borderRadius:20}}>
                      <Text style={{textAlign:"center",paddingTop:10,color:"#fff",}}>Sign In</Text>
                   </TouchableOpacity>
                   <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:50,}}>
                       <View style={{borderColor:"#24afb3",borderBottomWidth:1,width:100}}></View>
                       <View  style={{width:110,height:30}}>
                       <Text style={{color:"#24afb3",width:120,marginTop:15,textAlign:"center",}}>Or sign in with </Text>
                       </View>
                       <View style={{borderColor:"#24afb3",borderBottomWidth:1,width:100}}></View>

                   </View>
                  
                   <View style={{marginLeft:30,marginTop:20}}>
                       <TouchableOpacity onPress={()=>navigation.navigate("signup")}>
                       <Text style={{color:"#24afb3",fontSize:14}}>Don't you have an account?Sign up now</Text>
                       </TouchableOpacity>
                   </View>

               </View>
           </View>
           </>
               )}
           </Formik>
       
       
       
       
        </View>
    )
}

export default login

const styles = StyleSheet.create({})
