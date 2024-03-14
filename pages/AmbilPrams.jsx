import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

const AmbilPrams = ({ route }) => {
    console.log(route.params);
    return (
        <View>
            <Text>AmbilPrams = {route.params.salam}</Text>
        </View>
    )
}

export default AmbilPrams;

const styles = StyleSheet.create({})
