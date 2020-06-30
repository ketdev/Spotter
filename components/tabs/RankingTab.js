import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ChatboxEllipses from "../../assets/chatbox-ellipses-outline.svg";

export default function Ranking() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.text}>Ranking!</Text>
			<ChatboxEllipses width='40' height='40' color='white'/>
		</View>
	);
}

const styles = StyleSheet.create({
	text:{
		color: 'white'
	}
});