import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text> About</Text>
      <Link href="/" style={styles.linkText}>Back to home screen</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffffff'
  },
  text: {
    textAlign: 'center'
  },
  linkText: {
    padding: 10,
    textDecorationLine: 'underline'
  }
})