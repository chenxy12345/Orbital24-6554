import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { useNavigation } from '@react-navigation/native';

const ChatsScreen = ({ navigation }) => {

  return (
    <View>
      <Button
        title="Chat!"
        onPress={() => navigation.navigate("ChatRoom")}
      />
    </View>
  )
}

export default ChatsScreen

const styles = StyleSheet.create({})