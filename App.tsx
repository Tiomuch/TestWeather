import React from 'react'
import type {Node} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { gStyle } from './src/styles/styles'
import LoginProvider from './src/utils/LoginProvider'
import AppStack from './src/navigation/AppStack'
import { Provider } from 'react-redux'
import store from './src/store/index'

const App: () => Node = () => {
  return (
    <SafeAreaView style={gStyle.main}>
        <Provider store = { store }>
            <LoginProvider>
                <AppStack />
            </LoginProvider>
        </Provider>
    </SafeAreaView>
  )
}

export default App