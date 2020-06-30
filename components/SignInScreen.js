import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SignInScreen(props) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in" />
        </View>
    );
  }