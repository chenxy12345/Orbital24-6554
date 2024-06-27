import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import ChatComponent from './ChatComponent';
import { getCountFromServer, query, where } from 'firebase/firestore';
import { reload } from 'firebase/auth';

const ChatsScreen = ({ navigation }) => {

  const auth = FIREBASE_AUTH;

  const [chatlist, setChatList] = useState([]);

  useEffect(() => {

    const email = auth.currentUser?.email

    const subscriber = firebase.firestore()
      .collection('users')
      .doc(email)
      .collection('liked')
      .onSnapshot(querySnapshot => {

        const ongoingChats = [];

        querySnapshot.forEach(documentSnapshot => {

          const filteredCollectionRef = firebase
            .firestore()
            .collection('users')
            .doc(email)
            .collection('likes');

          filteredCollectionRef.where('email', '==', documentSnapshot.data().email).get().then(filteredSnapshot => {
            if (!filteredSnapshot.empty) {
              ongoingChats.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id
              });
            }
          })

        });
        setChatList(ongoingChats);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();

  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={chatlist}
        renderItem={({ item }) => (
          <ChatComponent
            email={item.email}
            image={{ uri: item.imageURL }}
            title={item.firstname}
          />
        )}
      />
    </View >
  )
}

export default ChatsScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

})