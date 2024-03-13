import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "-",
      name: ""
    };
  }
  ambilData = () => {
    fetch("https://reqres.in/api/users/5")
    .then(res => res.json())
    .then(data => {
      console.log(data.data.email);
      this.setState({
        email: data.data.email,
        name : data.data.first_name + " " + data.data.last_name
      })
    })
  }
  render() {
    return (
      <View>
        <View>
          <Text>Email : {this.state.email}</Text>
          <Text>Name  :{this.state.name} </Text>
        </View>
        <View>
          <Button title="Ambil data dari internet" onPress={this.ambilData} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})