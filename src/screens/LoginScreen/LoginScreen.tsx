import React, { useState } from 'react'
import { Text } from 'react-native'
import { FirebaseUtil } from '../../utils'
import { Container, StyledTextInput, StyledButton, StyledText } from './style'

export default function LoginScreen() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [create, setCreate] = useState<boolean>(false)

    const signIn = () => {
        if (!email || !password) {
            alert('Email/password is wrong')
        } else {
            FirebaseUtil.signIn(email, password).catch((e) => {
                console.log(e)
                alert('Email/password is wrong')
            })
        }
    }

    const signUp = () => {
        if (!email || !password || !repeatPassword) {
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
        <Container>
            <StyledTextInput
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <StyledTextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            { create ? (
                <>
                    <StyledTextInput
                        placeholder="Repeat Password"
                        onChangeText={setRepeatPassword}
                        value={repeatPassword}
                        secureTextEntry={true}
                    />
                    <StyledButton onPress={signUp}>
                        <Text>Sign up</Text>
                    </StyledButton>
                    <StyledText onPress={() => setCreate(false)}>Sign in</StyledText>
                </>
            ) : (
                <>
                    <StyledButton onPress={signIn}>
                        <Text>Sign in</Text>
                    </StyledButton>
                    <StyledText onPress={() => setCreate(true)}>Create an Account</StyledText>
                </>
            ) }
        </Container>
    )
}