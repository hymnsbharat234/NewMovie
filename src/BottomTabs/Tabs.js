import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import HomeStack from "./Home"
import ProfileStack from "./Profile"
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import AddStack from "./Add"
const Tabs=createMaterialBottomTabNavigator()
const Tab = () => {
    return (
        <>
        <Tabs.Navigator
         barStyle={{ backgroundColor: "orange" }}
    screenOptions={{
    
    }}
        >
            <Tabs.Screen component={HomeStack} name="Home" options={{
                headerShown:false,
                tabBarLabel:"Now Playing",
                  
                  tabBarIcon: ({focused}) => (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 2,
                      }}>
                      <Icons
                        name="play-box"
                        size={25}
                        style={{
                          color: focused ? '#212121' : '#748c94',
                        }}
                      />
                    </View>
                  ),
                }}
           />
            <Tabs.Screen component={AddStack} name="Add" options={{
                
                title:"Create Workouts",
                 tabBarLabel:"Top",
                   tabBarIcon: ({focused}) => (
                     <View
                       style={{
                         alignItems: 'center',
                         justifyContent: 'center',
                         top: 2,
                       }}>
                       <Icons
                         name="star-face"
                         size={25}
                         style={{
                           color: focused ? '#212121' : '#748c94',
                         }}
                       />
                     </View>
                   ),
                 }}
            />
            <Tabs.Screen component={ProfileStack} name="Profile" options={{
                
                headerShown:false,
                tabBarLabel:"Profile",
               
                  tabBarIcon: ({focused}) => (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 2,
                      }}>
                      <Icons
                        name="account"
                        size={25}
                        style={{
                          color: focused ? '#212121' : '#748c94',
                        }}
                      />
                         
                    </View>
                  ),
                }}
           />
           
        </Tabs.Navigator>
        </>
    )
}

export default Tab

const styles = StyleSheet.create({})
