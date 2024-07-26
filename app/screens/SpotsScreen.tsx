import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SpotsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView testID="container">
      <TouchableOpacity testID="central-library"
        style={[styles.whiteButton]}
        onPress={() => navigation.navigate('ClbScreen')}
        >
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/clbentrance.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>Central Library</Text>
      </TouchableOpacity>

      <TouchableOpacity testID="Yale-NUS Library"
      style={[styles.peachButton]}
      onPress={() => navigation.navigate('YaleScreen')}
      >
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/yaleentrance.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>Yale-NUS Library</Text>
      </TouchableOpacity>

      <TouchableOpacity testID="Medicine + Science"
      style={[styles.whiteButton]}
      onPress={() => navigation.navigate('MedSciScreen')}
      >
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/medscientrance.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>Medicine + Science</Text>
      </TouchableOpacity>

      <TouchableOpacity testID = "HSSML"
      style={[styles.peachButton]}
      onPress={() => navigation.navigate('HssmlScreen')}
      >
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/HSSML.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>HSSML</Text>
      </TouchableOpacity>

      <TouchableOpacity testID="ERC(Utown)"
      style={[styles.whiteButton]}
      onPress={() => navigation.navigate('ErcScreen')}
      >
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/ercentrance.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>ERC(Utown)</Text>
      </TouchableOpacity>

      <TouchableOpacity testID="Stephen Raidy Centre"
      style={[styles.peachButton]}
      onPress={() => navigation.navigate('StephenScreen')}
      >
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/stephenentrance.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>Stephen Raidy Centre</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default SpotsScreen

const styles = StyleSheet.create({
  buttonOrange: {
    backgroundColor: '#F1948A'
  },

  whiteButton: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    height: 150
  },

  peachButton: {
    flexDirection: "row",
    backgroundColor: "seashell",
    padding: 12,
    borderRadius: 10,
    height: 150
  }
});