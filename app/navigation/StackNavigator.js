import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SpotsScreen from '../screens/SpotsScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator screenOptions={() => ({
                tabBarShowLabel: false
            })}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarStyle: { backgroundColor: '#101010' },
                        tabBarLabelStyle: { color: '008397' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialCommunityIcons name="school-outline" size={30} color="white" />
                            ) : (
                                <MaterialCommunityIcons name="school-outline" size={30} color="#989898" />
                            )
                    }}
                />

                <Tab.Screen
                    name="Spots"
                    component={SpotsScreen}
                    options={{
                        tabBarStyle: { backgroundColor: '#101010' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialCommunityIcons name="map-marker" size={30} color="white" />
                            ) : (
                                <MaterialCommunityIcons name="map-marker" size={30} color="#989898" />
                            )
                    }}
                />

                <Tab.Screen
                    name="Chats"
                    component={ChatsScreen}
                    options={{
                        tabBarStyle: { backgroundColor: '#101010' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialCommunityIcons name="chat" size={30} color="white" />
                            ) : (
                                <MaterialCommunityIcons name="chat" size={30} color="#989898" />
                            )
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarStyle: { backgroundColor: '#101010' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialCommunityIcons name="account" size={30} color="white" />
                            ) : (
                                <MaterialCommunityIcons name="account" size={30} color="#989898" />
                            )
                    }}
                />

            </Tab.Navigator>
        )
    }

    function MainStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer independent= "yes">
            <MainStack />
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})