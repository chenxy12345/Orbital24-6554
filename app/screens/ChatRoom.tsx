import { Button, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const Chat: FC = () => {
    return (
        <View style={styles.container}>
            <Text> Chat goes here! </Text>
        </View>
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

export default Chat;