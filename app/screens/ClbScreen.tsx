import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps';

const ClbScreen = () => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 1.2964042,
        longitude: 103.7729943,
        latitudeDelta: 0.0050,
        longitudeDelta: 0.0050,
    })
    return (
        <ScrollView style={{ padding: 10 }}>
            <MapView testID="map" style={styles.map} region={mapRegion} >
                <Marker coordinate={mapRegion} title='Central Library' />
            </MapView>

            <View
                style={[styles.whiteButton]}
                testID="image-1-container">
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/clb1.png')} testID="image-1" />
            </View>
            <View
                style={[styles.peachButton]}
                testID="image-2-container">
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/clb2.png')} testID="image-2" />
            </View>
            <View
                style={[styles.whiteButton]}
                testID="image-3-container">
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/clb3.png')} testID="image-3" />
            </View>
            <View
                style={[styles.peachButton]}
                testID="image-4-container">
                <Image style={{ width: 375, height: 275 }} source={require('../../assets/clb.png')} testID="image-4" />
            </View>
        </ScrollView>
    )
}

export default ClbScreen

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