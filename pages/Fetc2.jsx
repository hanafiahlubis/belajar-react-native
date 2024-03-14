import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component, useEffect, useState } from 'react'

export default Fetc2 = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [foto, setFoto] = useState("");
    useEffect(() => {
        fetch("https://reqres.in/api/users/5")
            .then(res => res.json())
            .then(data => {
                console.log(data.data.avatar);
                setNama(data.data.first_name + " " + data.data.last_name);
                setEmail(data.data.email);
                setFoto(data.data.avatar)
            });
    }, []);

    return (
        <View>

            <Image
                source={{ uri: foto }}
                style={{ width: 200, height: 200 }}
            />

            <Text>Nama : {nama}</Text>
            <Text>Email : {email}</Text>
        </View>

    )
}

const styles = StyleSheet.create({})