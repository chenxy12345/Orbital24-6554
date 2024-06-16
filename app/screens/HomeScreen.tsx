import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User, UserCredential, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Image, View, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, TextInput, StyleSheet, Alert, FlatList } from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB, FIREBASE_DB, storage } from '../../FirebaseConfig';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setDoc, addDoc, doc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from "expo-image-picker"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import UserComponent from './UserComponent';

const HomeScreen = () => {

  

  const [loading, setLoading] = useState(true);
  const [userlist, setUserlist] = useState([]);

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          if (documentSnapshot.data().email != FIREBASE_AUTH.currentUser.email) {
            users.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          }
        });

        setUserlist(users);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  function Users() {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users

    if (loading) {
      return <ActivityIndicator />;
    }

  }

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      marginTop: 70,
      alignItems: 'center',
    }}>
      <FlatList
        data={userlist}
        renderItem={({ item }) => (
          <UserComponent
            image={{ uri: item.imageURL }}
            title={item.firstname}
            faculty={item.faculty}
            year={item.yearofstudy}
            email={item.email}
            imageURL={item.imageURL}
          />
        )}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})