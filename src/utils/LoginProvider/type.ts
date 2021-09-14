import {FirebaseAuthTypes} from '@react-native-firebase/auth'
import React from 'react'

export type ContextType = {
    user: FirebaseAuthTypes.User | null
    isLoading: boolean
}

export type Props = {
    children: React.ReactNode
}