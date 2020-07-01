import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Title, Subheading } from 'react-native-paper';

import { AuthContext } from '../provider/AuthProvider';
import { SIGNUP_NAVTAG } from './SignUpScreen';
import FormInput from '../components/common/FormInput';
import FormButton from '../components/common/FormButton';
import SpotterTitle from "../assets/spotter-title.svg";


export const LOGIN_NAVTAG = 'Login';

export default function LoginScreen({ navigation, ...props }) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const { login } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <SpotterTitle style={styles.titleText} />
            <Title style={styles.titleText}>Welcome!</Title>
            <Subheading style={styles.subheading}>Log in to continue</Subheading>
            <FormInput
                labelName='Email'
                value={email}
                autoCapitalize='none'
                onChangeText={userEmail => setEmail(userEmail)}
            />
            <FormInput
                labelName='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={userPassword => setPassword(userPassword)}
            />
            {errorMessage !== '' ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : <></>}
            <FormButton
                title='Login'
                modeValue='contained'
                labelStyle={styles.loginButtonLabel}
                onPress={() => login(email, password)
                    .catch(err => {
                        // console.log(err.message);
                        // Hide authentication details 
                        setErrorMessage("Invalid username and/or password");
                    })
                } />
            <FormButton
                title='New user? Sign Up'
                modeValue='text'
                uppercase={false}
                labelStyle={styles.navButtonText}
                onPress={() => navigation.navigate(SIGNUP_NAVTAG)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 24,
        marginBottom: 10,
        color: 'white'
    },
    subheading: {
        fontSize: 18
    },
    loginButtonLabel: {
        fontSize: 22
    },
    navButtonText: {
        fontSize: 16
    },
    errorText: {
        color: 'red'
    }
});