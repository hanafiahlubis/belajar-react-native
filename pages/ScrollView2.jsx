import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component, useState } from 'react'

export default class ScrollView2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kumpulanMenu: [
                {
                    id: 1,
                    menu: "Kepala Ikan cupang"
                },
                {
                    id: 2,
                    menu: "Kaki Ikan cupang"
                },
                {
                    id: 3,
                    menu: "tangan Ikan cupang"
                },
                {
                    id: 4,
                    menu: "Perut Ikan cupang"
                },
                {
                    id: 5,
                    menu: "Perut Ikan cupang"
                },
                {
                    id: 6,
                    menu: "Perut Ikan cupang"
                },
                {
                    id: 7,
                    menu: "Perut Ikan cupang"
                },
                {
                    id: 8,
                    menu: "Perut Ikan cupang"
                },
                {
                    id: 9,
                    menu: "Perut Ikan cupang"
                },
                {
                    id: 10,
                    menu: "Perut Ikan cupang"
                },
                {
                    id: 11,
                    menu: "Perut Ikan cupang"
                },
                {
                    id: 12,
                    menu: "Perut Ikan cupang"
                },

            ]
        };
    }

    render() {

        return (
            <View>
                <ScrollView>
                    {
                        this.state.kumpulanMenu.map((menu, index) => (
                            <View key={index}><Text style={styles.menu} >{menu.menu} {index + 1} </Text></View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        padding: 20,
        backgroundColor: '#f00',
        color: 'white',
        marginBottom: 10,
        fontSize: 30
    }
})