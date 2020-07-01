import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import IconBarbellOutline from "../../assets/barbell-outline.svg";

const Stack = createStackNavigator();

export default function Workout() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Workout" component={WorkoutScreen} />
		</Stack.Navigator>
	);
}

function WorkoutScreen() {
	return (	
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>			
			<IconBarbellOutline width='40' height='40' color='white'/>
			<Text style={styles.text}>Workout!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'white'
	},
});