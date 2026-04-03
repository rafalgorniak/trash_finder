import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.text}> Home</Text>
      <Link href="/about" style={styles.linkText}>About Page</Link>
      <Link href="/shoplist" style={styles.linkText}>Shoping Page</Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: 'center'
  },
  linkText: {
    padding: 10,
    textDecorationLine: 'underline'
  }
})