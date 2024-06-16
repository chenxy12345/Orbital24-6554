import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import ChatComponent from './ChatComponent';

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
          ongoingChats.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id
          });
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