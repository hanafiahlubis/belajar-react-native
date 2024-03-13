import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Anak extends Component {
  render() {
    
    return (
      <View>
        <Text>Anak</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerAnak: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})