import React from 'react';

// Initialize Firebase
import * as firebase from 'firebase';
import "firebase/app";
import "firebase/auth";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyCsIkd9TYhsaAj9ki1xLH1qvCvSNPxmMxQ",
	authDomain: "spotter-9c84a.firebaseapp.com",
	databaseURL: "https://spotter-9c84a.firebaseio.com",
	projectId: "spotter-9c84a",
	storageBucket: "spotter-9c84a.appspot.com",
	messagingSenderId: "313612064611",
	appId: "1:313612064611:web:ffdb54862ff40768962556",
	measurementId: "G-FZP2QSN3GD"
};
var defaultProject = firebase.apps.length > 0 ?
	firebase.app() : firebase.initializeApp(firebaseConfig);

// Import Providers and start routes
import { Provider as PaperProvider } from 'react-native-paper';
import { PaperTheme } from './Theme';
import { AuthProvider } from './components/auth/AuthProvider';	
import Routes from './components/Routes';

export default function App() {	
	return (
		<PaperProvider theme={PaperTheme}>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</PaperProvider>
	);
}
