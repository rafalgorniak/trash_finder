import { View, useColorScheme, StyleProp, ViewStyle, ViewProps } from 'react-native'
import { Colors } from '../constants/Colors'
import React from 'react'

type Props = ViewProps & {
    style: StyleProp<ViewStyle>
}

const ThemedView = ({ style, ...props }: Props) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

  return (
    <View 
    style={[{backgroundColor: theme.background}, style, ]}
    {...props}>
    </View>
  )
}

export default ThemedView