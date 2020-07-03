import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import IconTrophyOutline from "../../assets/trophy-outline.svg";

const Stack = createStackNavigator();

export default function Ranking() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Rank" component={RankScreen} />
		</Stack.Navigator>
	);
}

function RankScreen() {
	return (	
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>			
			<IconTrophyOutline width='40' height='40' color='white'/>
			<Text style={styles.text}>Ranking!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'white'
	},
});