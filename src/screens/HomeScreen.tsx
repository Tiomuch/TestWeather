import React, { useEffect, useCallback } from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {gStyle} from '../styles/styles'
import FirebaseUtil from '../utils/FirebaseUtil'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../store/actionCreators'

export default function HomeScreen() {
    const dispatch = useDispatch()
    const handler = useCallback(() => {
        dispatch(fetchWeather())
    }, [])

    useEffect(() => {
        handler()
    }, [])

    const signOut = () => {
        FirebaseUtil.signOut().catch((e) => {
            console.log(e)
            alert('Something went wrong')
        })
    }

    const value = useSelector(state => state.weather)

    return (
        <View style={gStyle.container}>
            <TouchableOpacity style={gStyle.button} onPress={() => signOut()}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <Text onPress={() => console.log(value)}>Home</Text>
        </View>
    )
}