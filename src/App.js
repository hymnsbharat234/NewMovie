import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,DarkTheme} from "@react-navigation/native"
import NavigationPage from "./layout/Navigation"

export default function App() {
  return (
    <View style={styles.container}>
     <NavigationContainer >
       <NavigationPage/>
     </NavigationContainer>
     {/* <Text>Hello</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
