import { View, StyleSheet, ViewProps } from 'react-native'
import MapView, { MapViewProps } from 'react-native-maps'
import React from 'react'

type Props = MapViewProps;

const Map = ({...prop }: Props) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} {...prop}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map