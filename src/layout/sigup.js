import React from 'react'
import { StyleSheet, Text, View,Image,StatusBar, TouchableOpacity, TextInput, Alert } from 'react-native'
import {Formik} from "formik"
import * as Yup from "yup"
import Validator from "email-validator"
import {firebase,db} from "./firebase"
const Signup = ({navigation}) => {

    const SignFormSchema=Yup.object().shape({
        email:Yup.string().email().required("An email is required"),
        password:Yup.string(),
        userName:Yup.string().required().min(2,"A username is required")

        .required()
        .min(8,"Your Password has to have at least 8 Character")
    })
    // const getRandonUser = async() =>{
    //     const response = await fetch(`https://randomuser.me/api`)
    //     const data=await response.json()
    //     return data.results[0].picture.large

    // }

    const onSignup=async (email,password,userName) => {
        try {
          const authuser=  await firebase.auth().createUserWithEmailAndPassword(email, password)
            console.log("user created sucessfully",email,password)
            // db.collection('users').add({owner_uid:authuser.user.uid,
            // userName:userName,
            // email:authuser.user.email,
          
            // })
        }catch(error){
            Alert.alert("My Lord",error.message)

        }
    }
    


    return (
        <View style={{flex: 1,backgroundColor:"#97f5f7"}}>
            <StatusBar barStyle="dark-content" backgroundColor="#97f5f7"/>
            <Formik initialValues={{email: "", password: "",userName:""}}
            onSubmit={(values)=>{
              onSignup(values.email, values.password,values.userName)
            }}
            validationSchema={SignFormSchema}
            validateOnMount={true}
            >
               {({handleChange,handleBlur,handleSubmit,values,isValid})=>(
                   <>
           <View style={{alignItems:"center",marginTop:10}}>
             
               <View style={{marginTop:80}}>
                   <Text style={{fontSize:24,color:"#31797b",padding:10,fontWeight:"bold"}}>Sign up</Text>
                   <TouchableOpacity style={{width:300,height:40,backgroundColor:"#fff",borderRadius:20}}>
                       <TextInput
                        
                        autoFocus={true}
                        onChangeText={handleChange("userName")}
                        onBlur={handleBlur("userName")}
                        value={values.userName}
                     
                        autoCapitalize="none"
                       placeholder="name"
                       style={{width:"100%",paddingLeft:20,paddingTop:7}}
                       />
                   </TouchableOpacity>
                   <TouchableOpacity style={{width:300,height:40,marginTop:10,backgroundColor:"#fff",borderRadius:20}}>
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
                   style={{width:300,height:40,marginTop:10, backgroundColor:"#24afb3",borderRadius:20}}>
                      <Text style={{textAlign:"center",paddingTop:10,color:"#fff",}}>Sign up</Text>
                   </TouchableOpacity>
                   <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:50,}}>
                       <View style={{borderColor:"#24afb3",borderBottomWidth:1,width:100}}></View>
                       <View  style={{width:110,height:30}}>
                       <Text style={{color:"#24afb3",width:120,marginTop:15,textAlign:"center",}}>Or sign in with </Text>
                       </View>
                       <View style={{borderColor:"#24afb3",borderBottomWidth:1,width:100}}></View>

                   </View>
                   {/* <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:30,marginHorizontal:40}}>
                       <View style={{width:50,height:50,backgroundColor:"#24afb3",borderRadius:50}}>
                           <TouchableOpacity>
                               <Image source={require("../../assets/fb.png")} resizeMode="contain" style={{marginLeft:8,marginTop:6}}/>


                           </TouchableOpacity>
                           
                       </View>
                       <View style={{width:50,height:50,backgroundColor:"#24afb3",borderRadius:50}}>
                           <TouchableOpacity>
                               <Image source={require("../../assets/gg.png")} resizeMode="contain" style={{marginLeft:8,marginTop:6}}/>


                           </TouchableOpacity>
                           
                       </View>
                       <View style={{width:50,height:50,backgroundColor:"#24afb3",borderRadius:50}}>
                           <TouchableOpacity>
                               <Image source={require("../../assets/apple.png")} resizeMode="contain" style={{marginLeft:8,marginTop:6}}/>


                           </TouchableOpacity>
                           
                       </View>
                   </View> */}
                   <View style={{marginLeft:30,marginTop:20}}>
                       <TouchableOpacity onPress={()=>navigation.navigate("login")}>
                       <Text style={{color:"#24afb3",fontSize:14}}>Already have an account?Sign In now</Text>
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

export default Signup

const styles = StyleSheet.create({})
