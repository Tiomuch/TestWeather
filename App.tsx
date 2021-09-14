import React from 'react'
import type {Node} from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Login } from './src/utils'
import {AppStack} from './src/navigation'
import { Provider } from 'react-redux'
import { store } from './src/store/weather/myStore'

const App: () => Node = () => {
  return (
    <SafeAreaView style={gStyle.main}>
        <Provider store = { store }>
            <Login.LoginProvider>
                <AppStack />
            </Login.LoginProvider>
        </Provider>
    </SafeAreaView>
  )
}

const gStyle = StyleSheet.create<Styles>({
    main: {
        flex: 1
    }
})

export default App