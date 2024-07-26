import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'

const YaleScreen = () => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 1.3070149,
        longitude: 103.7725411,
        latitudeDelta: 0.0050,
        longitudeDelta: 0.0050,
    })
    return (
        <ScrollView style={{ padding: 10 }}>
            <MapView testID="map" style={styles.map} region={mapRegion} >
                <Marker coordinate={mapRegion} title='Central Library' />
            </MapView>
            <View
                style={[styles.whiteButton]}>
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/yale1.png')} testID="image-1" />
            </View>
            <View
                style={[styles.peachButton]}>
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/yale2.png')} testID="image-2" />
            </View>
            <View
                style={[styles.whiteButton]}>
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/yale3.png')} testID="image-3" />
            </View>
            <View
                style={[styles.peachButton]}>
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/yalenus.png')} testID="image-4" />
            </View>
        </ScrollView>
    )
}

export default YaleScreen

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
    },
    map: {
        width: '100%',
        height: '30%',
    },
})