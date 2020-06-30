import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import IconChatboxEllipsesOutline from "../svgs/ChatboxEllipsesOutline";

export default function Ranking() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.text}>Ranking!</Text>
			<IconChatboxEllipsesOutline width='40' height='40' color='white'/>
		</View>
	);
}

const styles = StyleSheet.create({
	text:{
		color: 'white'
	}
});