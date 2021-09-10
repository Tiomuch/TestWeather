import React, { useEffect, useState } from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {gStyle} from '../styles/styles'
import FirebaseUtil from '../utils/FirebaseUtil'
import { fetchWeather } from '../store/actionCreators'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import LoadingScreen from './LoadingScreen'

export default function HomeScreen() {
    const [reload, setReload] = useState<number>(0)

    const {weather, error, loading} = useTypedSelector(state => state)
    const {fetchWeather} = useActions()

    useEffect(() => {
        fetchWeather()
    }, [reload])

    const signOut = () => {
        FirebaseUtil.signOut().catch((e) => {
            console.log(e)
            alert('Something went wrong')
        })
    }

    if (loading) {
        return (
            <LoadingScreen />
        )
    }

    if (error) {
        return (
            <View style={gStyle.container}>
                <Text style={gStyle.errorText}>Something went wrong</Text>
                <TouchableOpacity style={gStyle.button} onPress={() => setReload(reload + 1)}>
                    <Text>Reload App</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gStyle.button} onPress={() => signOut()}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={gStyle.container}>
            <TouchableOpacity style={gStyle.button} onPress={() => signOut()}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <Text onPress={() => console.log(weather)}>Home</Text>
        </View>
    )
}