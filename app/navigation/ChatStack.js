import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatsScreen from '../screens/ChatsScreen';
import ChatRoom from '../screens/ChatRoom';

const ChatStack = () => {
    const StackChat = createNativeStackNavigator()
    return (
        <StackChat.Navigator>
            <StackChat.Screen
                name="Chats"
                component={ChatsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F1948A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        marginBottom: 5,
                    },
                }}
            />
            <StackChat.Screen
                name="ChatRoom"
                component={ChatRoom}
                options={{
                    headerStyle: {
                        backgroundColor: '#F1948A',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: false,
                    headerTitleAlign: 'center',
                    headerTitle: "Chat",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        marginTop: 5,
                    }
                }}
            />
        </StackChat.Navigator>
    )
}

export default ChatStack

const styles = StyleSheet.create({})