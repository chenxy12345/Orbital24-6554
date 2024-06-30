import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SpotsScreen from '../screens/SpotsScreen';
import ClbScreen from '../screens/ClbScreen';
import YaleScreen from '../screens/YaleScreen';
import MedSciScreen from '../screens/MedSciScreen';
import HssmlScreen from '../screens/HssmlScreen';
import ErcScreen from '../screens/ErcScreen';
import StephenScreen from '../screens/StephenScreen';


const SpotsStack = () => {
    const spotsStack = createNativeStackNavigator()
    return (
        <spotsStack.Navigator>
            <spotsStack.Screen
                name="Study Spots"
                component={SpotsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F1948A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        marginTop: 10,
                    }
                }}
            />
            <spotsStack.Screen
                name="ClbScreen"
                component={ClbScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F1948A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        marginTop: 10,
                    },
                    headerTitle: "Central Library",
                    headerBackTitleVisible: false
                }}
            />
             <spotsStack.Screen
                name="YaleScreen"
                component={YaleScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F1948A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        marginTop: 10,
                    },
                    headerTitle: "Yale-NUS Library",
                    headerBackTitleVisible: false
                }}
            />
             <spotsStack.Screen
                name="MedSciScreen"
                component={MedSciScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F1948A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        marginTop: 10,
                    },
                    headerTitle: "Medicine + Science Library",
                    headerBackTitleVisible: false
                }}
            />
            <spotsStack.Screen
                name="HssmlScreen"
                component={HssmlScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F1948A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        marginTop: 10,
                    },
                    headerTitle: "HSSML",
                    headerBackTitleVisible: false
                }}
            />
            <spotsStack.Screen
                name="ErcScreen"
                component={ErcScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F1948A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        marginTop: 10,
                    },
                    headerTitle: "ERC(Utown)",
                    headerBackTitleVisible: false
                }}
            />
            <spotsStack.Screen
                name="StephenScreen"
                component={StephenScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#F1948A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        marginTop: 10,
                    },
                    headerTitle: "Stephen Raidy Centre",
                    headerBackTitleVisible: false
                }}
            />
        </spotsStack.Navigator>
    )
}

export default SpotsStack

const styles = StyleSheet.create({})