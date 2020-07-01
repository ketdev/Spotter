import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import IconChatboxOutline from "../../assets/chatbox-ellipses-outline.svg";

const Stack = createStackNavigator();

export default function Message() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Messages" component={MessagesScreen} />
		</Stack.Navigator>
	);
}

function MessagesScreen() {
	return (	
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>			
			<IconChatboxOutline width='40' height='40' color='white'/>
			<Text style={styles.text}>Messages!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'white'
	},
});