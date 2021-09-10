import React, { useEffect, useState } from 'react'
import {Text, View, TouchableOpacity, FlatList} from 'react-native'
import {gStyle} from '../styles/styles'
import FirebaseUtil from '../utils/FirebaseUtil'
import { fetchWeather } from '../store/actionCreators'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import LoadingScreen from './LoadingScreen'
import { CityPage } from '../components/CityPage'

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
                <View style={gStyle.main}>
                    <Text style={gStyle.errorText}>Something went wrong</Text>
                    <TouchableOpacity style={gStyle.button} onPress={() => setReload(reload + 1)}>
                        <Text>Reload App</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={gStyle.logoutButton} onPress={() => signOut()}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={gStyle.container}>
            <View style={gStyle.main}>
                <FlatList
                    data={weather}
                    keyExtractor={(item) => item.city.id.toString()}
                    horizontal
                    pagingEnabled
                    renderItem={({item}) => <CityPage item={item} />}
                />
            </View>
            <TouchableOpacity style={gStyle.logoutButton} onPress={() => signOut()}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}