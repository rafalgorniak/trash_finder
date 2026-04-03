import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import Map from '../components/Map'

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.text}>About</Text>
      
      <View style={styles.mapWrapper}>
        <Map 
        region={{
            latitude: 51.818472,
            longitude: 19.441472,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
        }}
        />
      </View>

      <Link href="/" style={styles.linkText}>Back to home screen</Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  mapWrapper: {
    flex: 1,        
    marginVertical: 20,
    overflow: 'hidden',
    borderRadius: 10,
  },
  linkText: {
    padding: 10,
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
})