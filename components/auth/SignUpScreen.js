import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from './AuthProvider';

import FormInput from '../common/FormInput';
import FormButton from '../common/FormButton';

export const SIGNUP_NAVTAG = 'SignUp';

export default function SignUpScreen({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordVerify, setPasswordVerify] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { register } = useContext(AuthContext);

	return (
		<View style={styles.container}>
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
			<FormInput
				labelName='Repeat Password'
				value={passwordVerify}
				secureTextEntry={true}
				onChangeText={userPassword => setPasswordVerify(userPassword)}
			/>
			{errorMessage !== '' ? (
				<Text style={styles.errorText}>{errorMessage}</Text>
			) : <></>}
			<FormButton
				title='Signup'
				modeValue='contained'
				labelStyle={styles.loginButtonLabel}
				onPress={() => register(email, password)
					.catch(err => {
						console.log(err.message);
						setErrorMessage(err.message);
					})
				} />
			<FormButton
				title='Already a User? Log In'
				modeValue='text'
				uppercase={false}
				labelStyle={styles.navButtonText}
				onPress={() => navigation.goBack()}
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
		marginBottom: 10
	},
	loginButtonLabel: {
		fontSize: 22
	},
	navButtonText: {
		fontSize: 18
	},
	navButton: {
		marginTop: 10
	},
    errorText: {
        color: 'red'
    }
});