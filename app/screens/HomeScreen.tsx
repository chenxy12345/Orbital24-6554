import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User, UserCredential, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Image, View, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, TextInput, StyleSheet, Alert } from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB, FIREBASE_DB, storage } from '../../FirebaseConfig';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setDoc, addDoc, doc, collection, getFirestore } from 'firebase/firestore';
import { firebase } from '../../FirebaseConfig';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from "expo-image-picker"
import "firebase/compat/storage";

const HomeScreen = () => {
  const auth = FIREBASE_AUTH;

  const url = auth.currentUser?.photoURL;

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
      <Image
        style= {{
          borderRadius: 1200,
          borderWidth: 1,
          marginBottom: 15,
          height: 100,
          width: 100,
          alignSelf: 'center',
        }}
        source={{
          uri: auth.currentUser?.photoURL,
        }}
      />
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