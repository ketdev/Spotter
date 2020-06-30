import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';

// import our screens
import SplashScreen from './components/SplashScreen';
import SignInScreen from './components/SignInScreen';
import MainScreen from './components/MainScreen';

// create toplevel navigation stack
const Stack = createStackNavigator();

// Customize Nagivator Theme
export const NavigatorTheme = {
	dark: true,
	colors: {
		primary: '#BB86FC',
		background: '#121212',
		card: '#000000',
		text: 'white',
		border: '#303030',
	},
};

export default function App() {
  // local state
  const state = {
	  isLoading: false,
	  userToken: 1,
  };

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
	<PaperProvider>
	<NavigationContainer theme={NavigatorTheme}>
		<Stack.Navigator headerMode='none'>
		{state.userToken == null ? (
			<Stack.Screen name='SignIn' component={SignInScreen}/>
		) : (          
			<Stack.Screen name='Main' component={MainScreen} />
		)}
		</Stack.Navigator>
	</NavigationContainer>
	</PaperProvider>
	);	
}
