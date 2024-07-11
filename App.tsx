import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './app/navigation/StackNavigator';
import WelcomeStackNavigator from './app/navigation/WelcomeStackNavigator';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH, FIRESTORE_DB } from './FirebaseConfig';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Login'>
        {user ? (
        <Stack.Screen name ='StackNavigator' component = { StackNavigator } options = {{ headerShown: false}} />
        ) : (
        <Stack.Screen name ='WelcomeStackNavigator' component = { WelcomeStackNavigator } options = {{ headerShown: false}} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};