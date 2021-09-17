import React, { useState, useEffect } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { ContextType, Props } from './type'

const LoginContext = React.createContext({} as ContextType)

function LoginProvider(props: Props) {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
        setUser(user)
        setIsLoading(false)
    }

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(onAuthStateChanged)
        return subscribe
    }, [])

    return (
        <LoginContext.Provider value={{user, isLoading}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default {LoginProvider, LoginContext}