import * as React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { COLOR_TEXT } from '../Theme';

export default function LoadingScreen() {
	return (
		<View style={styles.loadingContainer}>
			<ActivityIndicator size='large' color={COLOR_TEXT} />
		</View>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});