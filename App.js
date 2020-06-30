// import React, {useState} from 'react';
// import { StyleSheet, Text, View, Button, AppRegistry, SafeAreaView } from
// 'react-native'; import { Provider as PaperProvider } from
// 'react-native-paper'; import { Card } from 'react-native-paper';
// //import { uuid } from 'uuid-js';
// import color from 'color';

// import Constants from 'expo-constants';

// import StatusBar from './components/StatusBar';
// import AppBar from './components/AppBar';
// import NavigationBar from './components/NavigationBar';
// import AssetExample from './components/AssetExample';

// const theme = {
//   dark: false,
//   roundness: 4,
//   colors: {
//     primary: '#6200ee',
//     accent: '#03dac4',
//     background: '#f6f6f6',
//     surface: '#ffffff',
//     error: '#B00020',
//     text: '#000000',
//     onBackground: '#000000',
//     onSurface: '#000000',
//     disabled: color('#000000')
//       .alpha(0.26)
//       .rgb()
//       .string(),
//     placeholder: color('#000000')
//       .alpha(0.54)
//       .rgb()
//       .string(),
//     backdrop: color('#000000')
//       .alpha(0.5)
//       .rgb()
//       .string(),
//     notification: '#f50057',
//   },
//   animation: {
//     scale: 1.0,
//   },
// };

// export default function App() {
//   // // state
//   // const [items, setItems] = useState([
//   //   {id: 0}
//   // ]);

//   return (
//     <PaperProvider theme={theme}>
//       <StatusBar/>
//       <SafeAreaView style={styles.container}>
//           <AppBar title="Spotter [Prototype]" />

//           <View style={styles.content}>
//             <Card>
//               <AssetExample />
//             </Card>
//           </View>

//           <NavigationBar />

//       </SafeAreaView>
//     </PaperProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//     backgroundColor: '#ccc',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   button: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },

// });

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// customization
import {NavigatorTheme} from './components/common/Theme';

// import our screens
import SplashScreen from './components/SplashScreen';
import SignInScreen from './components/SignInScreen';
import MainScreen from './components/MainScreen';

// create toplevel navigation stack
const Stack = createStackNavigator();

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
	<NavigationContainer theme={NavigatorTheme}>
		<Stack.Navigator headerMode='none'>
		{state.userToken == null ? (
			<Stack.Screen name='SignIn' component={SignInScreen}/>
		) : (          
			<Stack.Screen name='Main' component={MainScreen} />
		)}
		</Stack.Navigator>
	</NavigationContainer>
	);	
}
