import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatsScreen from '../screens/ChatsScreen';
import ChatRoom from '../screens/ChatRoom';

const ChatStack = () => {
    const chatStack = createNativeStackNavigator()
    return (
        <chatStack.Navigator>
            <chatStack.Screen
                name="Chats"
                component={ChatsScreen}
                options={{ headerShown: true }}
            />
            <chatStack.Screen
                name="ChatRoom"
                component={ChatRoom}
                options={{ headerShown: false }}
            />
        </chatStack.Navigator>
    )
}

export default ChatStack

const styles = StyleSheet.create({})