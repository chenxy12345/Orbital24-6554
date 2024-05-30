import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const LoginScreen = ({ navigation }: { navigation: any }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
            console.log("Signed in successfully with email: " + email);
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding">
                <Text style={{
                    flexDirection: "row", color: "black", justifyContent: "center", alignContent: "stretch", textAlign: 'center',
                    fontWeight: "bold", fontSize: 40, padding: 10
                }}>BrainBuddies</Text>
                <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput value={password} style={styles.input} placeholder='Password' autoCapitalize='none' secureTextEntry={true} onChangeText={(text) => setPassword(text)}></TextInput>

                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <>
                        <TouchableOpacity style={styles.button} onPress={signIn}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOrange} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonText}>Go back to Welcome</Text>
                        </TouchableOpacity>
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff"
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
    buttonOrange: {
        backgroundColor: '#F1948A',
        alignSelf: 'center',
        padding: 12,
        width: '80%',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
    },
});