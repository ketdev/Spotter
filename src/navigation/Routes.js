import React, { useContext, useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../provider/AuthProvider';
import { NavigatorTheme } from '../components/Theme';
import HeaderLayout from '../components/HeaderLayout';

// import our screens
import LoadingScreen from '../screen/LoadingScreen';
import LoginScreen, { LOGIN_NAVTAG } from '../screen/LoginScreen';
import SignUpScreen, { SIGNUP_NAVTAG } from '../screen/SignUpScreen';

import MainTabs from './MainTabs';
import RoomScreen, { CHAT_NAVTAG } from '../screen/RoomScreen';


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
                <Stack.Navigator headerMode='none' mode='card'>
                    <Stack.Screen name='Main' component={MainTabs} />
                    <Stack.Screen name={CHAT_NAVTAG} component={RoomScreen} options={({ route }) => ({
                        title: route.params.thread.name
                    })} />

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