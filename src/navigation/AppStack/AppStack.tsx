import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Login } from '../../contexts'
import { LoginScreen, HomeScreen } from '../../screens'

const Stack = createNativeStackNavigator()

export default function AppStack() {
    const {user} = useContext(Login.LoginContext)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                { user ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Stack.Screen name="signin" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}