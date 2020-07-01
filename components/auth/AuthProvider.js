import React, { createContext, useState } from 'react';
import * as firebase from 'firebase';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				login: async (email, password) => {
					await firebase.auth().signInWithEmailAndPassword(email, password);
				},
				register: async (email, password) => {
					await firebase.auth().createUserWithEmailAndPassword(email, password);
				},
				logout: async () => {
					try {
						await firebase.auth().signOut();
					} catch (e) {
						console.error(e);
					}
				}
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
