import React, { useContext, useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './auth/AuthProvider';
import { NavigatorTheme } from '../Theme';

// import our screens
import LoadingScreen from './auth/LoadingScreen';
import LoginScreen, { LOGIN_NAVTAG } from './auth/LoginScreen';
import SignUpScreen, { SIGNUP_NAVTAG } from './auth/SignUpScreen';
import MainScreen from './MainScreen';

// common utils
import HeaderLayout from './common/HeaderLayout';

// create toplevel navigation stack
const Stack = createStackNavigator();

export default function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
        setLoading(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <NavigationContainer theme={NavigatorTheme}>
            {user ? (
                <Stack.Navigator screenOptions={{ header: HeaderLayout }} >
                    <Stack.Screen name='Main' component={MainScreen} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator headerMode='none' initialRouteName={LOGIN_NAVTAG}>
                    <Stack.Screen name={LOGIN_NAVTAG} component={LoginScreen} />
                    <Stack.Screen name={SIGNUP_NAVTAG} component={SignUpScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}