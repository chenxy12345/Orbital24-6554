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
            key: documentSnapshot.id,
          });
        });

        setChatList(ongoingChats);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Chat!"
        onPress={() => navigation.navigate("ChatRoom")}
      />
      <View style={{
      }}>
        <Text>hi!</Text>
        <FlatList
          data={chatlist}
          renderItem={({ item }) => (

            <ChatComponent style={styles.test}
              image={{ uri: item.imageURL }}
              title={ firebase.firestore().collection("users").doc(item.email).get }
            />
          )}
        />
        <Text>hi!</Text>

      </View>
    </View >
  )
}

export default ChatsScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    justifyContent: 'center',
    width: '80%',
    margin: 10,
    marginTop: 15,
    borderRadius: 30,
    alignSelf: 'center',
  },
  test: {
    backgroundColor: 'black',
  }
})