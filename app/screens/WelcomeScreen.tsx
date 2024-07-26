import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{width: 380, height: 380}} source={require('../../assets/BrainBuddiesIcon.png')} testID="welcome-image" />
            <Text style={{
                flexDirection: "row", color: "black", justifyContent: "center", alignContent: "stretch", textAlign: 'center',
                fontWeight: "bold", fontSize: 40, padding: 10
            }}>BrainBuddies</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('LoginScreen')}
                testID="first-button"
            >
                <Text style={styles.buttonText}>I've been here before</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonOrange]}
                onPress={() => navigation.navigate('SignupScreen')}
                testID="second-button"
            >
                <Text style={styles.buttonText}>I'm new here</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 5,
        marginVertical: 8,
        width: '60%',
    },
    buttonOrange: {
        backgroundColor: '#F1948A',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'sans-serif-medium', // Change this to your desired font family
    },
});

export default WelcomeScreen;