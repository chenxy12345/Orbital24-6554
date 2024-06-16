import React, { FC, useContext } from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { NavigationContext } from '@react-navigation/native';

const ChatComponent: FC<{ image: any; title: string }> = ({ image, title }) => {

    const navigation = useContext(NavigationContext);

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity>
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <Text style={styles.name}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    container: {
        height: 80,
        width: 370,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 11,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginHorizontal: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
    }
});

export default ChatComponent;