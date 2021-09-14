import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { gStyle } from './style'
import { FirebaseUtil } from '../../utils'

export default function LoginScreen() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [create, setCreate] = useState<boolean>(false)

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
        if (email === '' || password === '' || repeatPassword === '') {
            alert('Email/password is wrong')
        } else if (password !== repeatPassword) {
            alert('Passwords are different')
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
                    <TextInput
                        placeholder="Repeat Password"
                        onChangeText={setRepeatPassword}
                        value={repeatPassword}
                        style={gStyle.textInput}
                        secureTextEntry={true} />
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