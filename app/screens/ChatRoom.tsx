import { Button, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default function Chat() {
    return (
        <Text>
            Hi!
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})