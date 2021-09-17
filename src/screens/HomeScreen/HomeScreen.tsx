import React, { useEffect, useState, useRef } from 'react'
import {Text, View, TouchableOpacity, FlatList, SectionList, Animated, Dimensions} from 'react-native'
import {gStyle} from './style'
import { FirebaseUtil } from '../../utils'
import { requestedWeather } from '../../store'
import { useActions, useTypedSelector } from '../../hooks'
import { LoadingScreen } from '../index'
import { CityPage, DayOfList, Indicator } from '../../components'

export default function HomeScreen() {
    const scrollX = useRef(new Animated.Value(0)).current

    const [reload, setReload] = useState<number>(0)
    const [twoWeeksIdentificator, setTwoWeeksIdentificator] = useState<number>(0)

    const {weather, error, loading} = useTypedSelector(state => state)
    const {requestedWeather} = useActions()

    useEffect(() => {
        requestedWeather()
    }, [reload])

    const signOut = () => {
        FirebaseUtil.signOut().catch((e) => {
            console.log(e)
            alert('Something went wrong')
        })
    }

    return (<>
            { loading ? <LoadingScreen /> : error ? (
                <View style={gStyle.container}>
                    <View style={gStyle.main}>
                        <Text style={gStyle.errorText}>Something went wrong</Text>
                        <TouchableOpacity style={gStyle.button} onPress={() => setReload(reload + 1)}>
                            <Text>Reload App</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={gStyle.logoutButton} onPress={signOut}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={gStyle.container}>
                    {twoWeeksIdentificator === 0 ? (
                        <>
                            <View style={gStyle.main}>
                                <FlatList
                                    data={weather}
                                    keyExtractor={(item) => item.city.id.toString()}
                                    horizontal
                                    pagingEnabled
                                    onScroll={Animated.event(
                                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                                        {useNativeDriver: false}
                                    )}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({item, index}) => <CityPage item={item} index={index} onPress={(num) => setTwoWeeksIdentificator(num)} />}
                                />
                            </View>
                            <Indicator scrollX={scrollX} weather={weather} />
                            <TouchableOpacity style={gStyle.logoutButton} onPress={signOut}>
                                <Text>Logout</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <View style={gStyle.main}>
                                <SectionList
                                    keyExtractor={(item) => item.dt.toString()}
                                    showsVerticalScrollIndicator={false}
                                    sections={[
                                        {title: 'First Week', data: weather[twoWeeksIdentificator - 1].list.slice(0, 7)},
                                        {title: 'Second Week', data: weather[twoWeeksIdentificator - 1].list.slice(7, 14)},
                                    ]}
                                    renderItem={({item}) => <DayOfList day={item} />}
                                    renderSectionHeader={({section}) => (
                                        <Text style={gStyle.title}>{section.title}</Text>
                                    )}
                                />
                            </View>
                            <TouchableOpacity style={gStyle.logoutButton} onPress={() => setTwoWeeksIdentificator(0)}>
                                <Text>Back</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            )
            }
        </>
    )
}