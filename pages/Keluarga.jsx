import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import Anak from './Anak';


export default class Keluarga extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Keluarga</Text>
        <Button title='Pindah ke halman anak' onPress={()=>navigation.navigate('anak')}/>
        <Button title='Pindah ke halman ScrollView' onPress={()=>navigation.navigate('scroll')}/>
        <Button title='Pindah ke halman Fetch' onPress={()=>navigation.navigate('fetch')}/>
        <Anak/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})