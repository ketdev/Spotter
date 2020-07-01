import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import IconNotificationsOutline from "../../assets/notifications-outline.svg";

const Stack = createStackNavigator();

export default function Notification() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Notification" component={NotificationScreen} />
		</Stack.Navigator>
	);
}

function NotificationScreen() {
	return (	
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>			
			<IconNotificationsOutline width='40' height='40' color='white'/>
			<Text style={styles.text}>Notification!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'white'
	},
});