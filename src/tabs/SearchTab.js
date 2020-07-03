import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import IconSearchOutline from "../../assets/search-outline.svg";

const Stack = createStackNavigator();

export default function Search() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Search" component={SearchScreen} />
		</Stack.Navigator>
	);
}

function SearchScreen() {
	return (	
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>			
			<IconSearchOutline width='40' height='40' color='white'/>
			<Text style={styles.text}>Search!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'white'
	},
});