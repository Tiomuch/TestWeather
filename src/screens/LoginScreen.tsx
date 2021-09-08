import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { gStyle } from '../styles/styles'
import FirebaseUtil from '../utils/FirebaseUtil'

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [create, setCreate] = useState(false)

    const signIn = () => {
        if (email === '' || password === '') {
            alert('Email/password is wrong')
        } else {
            FirebaseUtil.signIn(email, password).catch((e) => {
                console.log(e)
                alert('Email/password is wrong')
            })
        }
    }

    const signUp = () => {
        if (email === '' || password === '') {
            alert('Email/password is wrong')
        } else {
            FirebaseUtil.signUp(email, password).catch((e) => {
                console.log(e)
                alert('Something went wrong')
            })
        }
    }

    return (
        <View style={gStyle.container}>
            <TextInput
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                style={gStyle.textInput} />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                style={gStyle.textInput}
                secureTextEntry={true} />
            { create ? (
                <>
                    <TouchableOpacity onPress={() => signUp()} style={gStyle.button}>
                        <Text>Sign up</Text>
                    </TouchableOpacity>
                    <Text style={gStyle.text} onPress={() => setCreate(false)}>Sign in</Text>
                </>
            ) : (
                <>
                    <TouchableOpacity onPress={() => signIn()} style={gStyle.button}>
                        <Text>Sign in</Text>
                    </TouchableOpacity>
                    <Text style={gStyle.text} onPress={() => setCreate(true)}>Create an Account</Text>
                </>
            ) }
        </View>
    )
}