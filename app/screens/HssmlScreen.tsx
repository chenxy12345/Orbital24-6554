import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'

const HssmlScreen = () => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 1.2931669,
        longitude: 103.7746048,
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
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/hssml1.png')} testID="image-1" />
            </View>
            <View
                style={[styles.peachButton]}>
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/hssml2.png')} testID="image-2" />
            </View>
        </ScrollView>
    )
}

export default HssmlScreen

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