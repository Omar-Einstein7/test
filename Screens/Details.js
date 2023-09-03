import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({route}) => {
  const { input } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{input}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Details
