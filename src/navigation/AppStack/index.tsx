import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Login } from '../../utils'
import { LoadingScreen, LoginScreen, HomeScreen } from '../../screens'

const Stack = createNativeStackNavigator()

export default function AppStack() {
    const {user, isLoading} = useContext(Login.LoginContext)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                { isLoading ? (
                    <Stack.Screen
                        name="loading"
                        options={{headerShown: false}}
                        component={LoadingScreen} />
                ) : user ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Stack.Screen name="signin" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}