import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const HomeScreen = () => {

  const auth = FIREBASE_AUTH;

  const handleSignOut = () => {
    auth
     .signOut()
     .then(() => console.log('User signed out!'))
     .catch((error) => console.log(error));
  }

  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          margin: 10,
          borderRadius: 10,
        }}
        >
          <Text style={{ color: 'white' }}>Sign Out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})