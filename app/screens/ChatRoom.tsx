import { Button, StyleSheet, Text, View } from 'react-native'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import firebase from 'firebase/compat'

const ChatRoom = ({ route, navigation }) => {

  const { email } = route.params;
  const [messages, setMessages] = useState([])
  const auth = FIREBASE_AUTH;
  const userEmail = auth.currentUser?.email

  useEffect(() => {
    const subscribe = firebase.firestore()
      .collection('users')
      .doc(userEmail)
      .collection(email)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let data: any = change.doc.data()
            data.createdAt = data.createdAt.toDate()
            setMessages((prevMessages) => GiftedChat.append(prevMessages, data))
          }
        })
      })

    return () => subscribe();

  }, [userEmail, email])

  function onSend(messages: IMessage[]) {
    firebase
      .firestore()
      .collection('users')
      .doc(userEmail)
      .collection(email)
      .doc(Date.now().toString())
      .set(messages[0])
      firebase
      .firestore()
      .collection('users')
      .doc(email)
      .collection(userEmail)
      .doc(Date.now().toString())
      .set(messages[0])
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: userEmail,
      }} 
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default ChatRoom