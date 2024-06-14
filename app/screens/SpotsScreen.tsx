import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SpotsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView>
      <View style={[styles.buttonOrange]}>
        <Text style={{
          marginTop: 50, backgroundColor: "#F1948A",
          flexDirection: "row", color: "white", justifyContent: "center", alignContent: "stretch", textAlign: 'center',
          fontWeight: "bold", fontSize: 30, padding: 10
        }}>Study Spots</Text>
      </View>

      <TouchableOpacity
        style={[styles.whiteButton]}>
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/clb.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>Central Library</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.peachButton]}>
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/yalenus.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>Yale-NUS Library</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.whiteButton]}>
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/medsci.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>Medicine + Science</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.peachButton]}>
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/HSSML.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>HSSML</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.whiteButton]}>
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/utown erc.png')} />
        <Text style={{
          fontSize: 20, fontWeight: 700, marginTop: 50, marginLeft: 10
        }}>ERC(Utown)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.peachButton]}>
        <Image style={{ width: 150, height: 125 }} source={require('../../assets/stephen.png')} />
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