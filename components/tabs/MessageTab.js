import * as React from 'react';
import {View, Button, Image, StatusBar, StyleSheet, Text} from 'react-native';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

// common utils
import FocusAwareStatusBar from '../common/FocusWareStatusBar';


const HOME_NAVIGATION_TAG = 'Home';
const DETAILS_NAVIGATION_TAG = 'Details';

const Stack = createStackNavigator();

export default function Message() {
	return (
		<Stack.Navigator headerMode='screen'>
			<Stack.Screen name={HOME_NAVIGATION_TAG} component={HomeScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
			<Stack.Screen name={DETAILS_NAVIGATION_TAG} component={DetailsScreen} />
		</Stack.Navigator>
	);
}

function LogoTitle() {
	return (
		<Image
			style={{ width: 50, height: 50 }}
			source={require('../../assets/icon.png')}
		/>
	);
}

function HomeScreen({ navigation, route }) {
	React.useEffect(() => {
		if (route.params?.post) {
			// Post updated, do something with `route.params.post`
			// For example, send the post to the server
		}
	}, [route.params?.post]);

	return (
		<SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
			<Text style={{
				color: '#fff'
			}}>Light Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate(DETAILS_NAVIGATION_TAG, { itemId: 86, otherParam: 'anything you want here', })}
				color="#fff"
			/>
		</SafeAreaView>
	);
}

function DetailsScreen({ navigation, route }) {
	// Get the param
	const { itemId } = route.params;
	const { otherParam } = route.params;

	return (
		<SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
			<FocusAwareStatusBar barStyle='dark-content' backgroundColor='#ecf0f1' />
			<Text>Dark Details Screen</Text>
			<Text>itemId: {JSON.stringify(itemId)}</Text>
			<Text>otherParam: {JSON.stringify(otherParam)}</Text>
			<Button
				title="Go to Details... again"
				onPress={() => navigation.push(DETAILS_NAVIGATION_TAG, { itemId: Math.floor(Math.random() * 100), })}
			/>
			<Button title='Go to Home' onPress={
				() => navigation.navigate(HOME_NAVIGATION_TAG)} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
				title='Go back to first screen in stack'
				onPress={
					() => navigation.popToTop()}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});