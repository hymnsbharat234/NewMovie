import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import * as Notifications from "expo-notifications"
import * as Permissions from "expo-permissions"


Notifications.setNotificationHandler({
    handleNotification:async()=>{
        return {
            shouldShowAlert:true,
            shouldPlaySound:true

        }
    }
})

const Noti = () => {
    const[pushToken,setPushToken] =useState();


    useEffect(()=>{
        Permissions.getAsync(Permissions.NOTIFICATIONS)
        .then(statusObj=>{
            if(statusObj !=='granted'){
                return Permissions.askAsync(Permissions.NOTIFICATIONS)
            }
        }).then(statusObj=>{
            if(statusObj !=='granted'){
                throw new Error("Permissions Not Granted")
            }
        })
        .then(()=>{
            console.log("getting token")
          return  Notifications.getExpoPushTokenAsync();

        })
        .then(data=>{
            const token=response.data
            setPushToken(token);
        })
        .catch((err)=>{
            console.log(err)
            return null
        })
    },[])
    useEffect(()=>{
     const backgroundSubscripation=   Notifications.addNotificationResponseReceivedListener(response=>{
            console.log(response)
        })
   const foregroundSubscripation=Notifications.addNotificationReceivedListener(notifications=>{
            console.log(notifications)
        });
        return ()=>{
            backgroundSubscripation.remove();
            foregroundSubscripation.remove()

        };

    },[])
    const triggerNoti=()=>{
        console.log('hi')
        // Notifications.scheduleNotificationAsync({
        //     content:{
        //         title:'My first Notification',
        //         body:"this is the first local notification",
        //         data:{mySpecialData:"Some Text"}
        //     },
        //     trigger:{
        //         seconds:10,
        //     }
        // })
            fetch('https://exp.host/--/api/v2/push/send',{
                method: 'POST',
                headers:{
                    "Accept":"application/json",
                    "Accept-Encoding": "gzip,deflate",
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    to:pushToken,
                    data:{extraData:"Some Data"},
                    title:"sent via the app",
                    body:"this push notification was sent via app"
                })
            })



    }
    
    return (
        <View style={{flex: 1}}>
            <View style={{marginTop:50}}>
        <TouchableOpacity
        onPress={triggerNoti}
        style={{width:130,height:40,backgroundColor:"teal",borderRadius:10}}>
        <Text style={{textAlign:"center",color:"white",fontWeight:"600",marginTop:10}}>Noti</Text>
        </TouchableOpacity>
        </View>
           
        </View>
    )
}

export default Noti

const styles = StyleSheet.create({})
