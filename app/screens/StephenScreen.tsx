import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const StephenScreen = () => {
    return (
        <ScrollView style={{ padding: 10 }}>
            <View
                style={[styles.whiteButton]}>
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/stephen.png')} />
            </View>
            <View
                style={[styles.peachButton]}>
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/stephenraidycentre.png')} />
            </View>
        </ScrollView>
    )
}

export default StephenScreen

const styles = StyleSheet.create({
    buttonOrange: {
        backgroundColor: '#F1948A'
    },

    whiteButton: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 10,
        height: 300,
        alignContent: "center",
        justifyContent: "center"
    },

    peachButton: {
        flexDirection: "row",
        backgroundColor: "seashell",
        padding: 12,
        borderRadius: 10,
        height: 300,
        alignContent: "center",
        justifyContent: "center"
    }
})