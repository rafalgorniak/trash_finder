import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import {  Stack } from 'expo-router'
import { Colors } from '../constants/Colors'

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

  return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.background},
        headerTintColor: theme.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
    }}>
        <Stack.Screen name='index' options={{title: 'Home'}}></Stack.Screen>
        <Stack.Screen name='about' options={{title: 'About'}}></Stack.Screen>
        <Stack.Screen name='contact' options={{title: 'Contact', headerShown: false}}></Stack.Screen>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})