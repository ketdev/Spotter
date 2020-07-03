import * as React from 'react';
import { Button } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderLogo from '../components/HeaderLogo';
import HeaderProfileAvatar from '../components/HeaderProfileAvatar';

import IconBarbellOutline from "../../assets/barbell-outline.svg";

const Stack = createStackNavigator();

export const WORKOUTS_NAVTAG = 'WorkoutStack';
import WorkoutProgramScreen, { WORKOUT_PROGRAM_NAVTAG } from '../screen/WorkoutProgramScreen';
import WorkoutWorkoutScreen, { WORKOUT_WORKOUT_NAVTAG } from '../screen/WorkoutWorkoutScreen';
import WorkoutExerciseScreen, { WORKOUT_EXERCISE_NAVTAG } from '../screen/WorkoutExerciseScreen';

export default function WorkoutStack() {
	return (
		<Stack.Navigator headerMode='screen' > 
			<Stack.Screen name={WORKOUT_PROGRAM_NAVTAG} 
				component={WorkoutProgramScreen} 
				options= {{
					// headerLeft: (props) => (
					// 	<Button
					// 	  onPress={() => alert('This is a button!')}
					// 	  title="Info"
					// 	  {...props}
					// 	/>
					//   ),
					headerTitle: props => <HeaderLogo {...props} />,
					headerRight: props => <HeaderProfileAvatar {...props} />,
				}}
				/>
			<Stack.Screen name={WORKOUT_WORKOUT_NAVTAG} 
				component={WorkoutWorkoutScreen}
				options={({ route }) => ({ 
					headerBackTitle: '',
					title: route.params.name 
				})}
				/>
			<Stack.Screen name={WORKOUT_EXERCISE_NAVTAG} 
				component={WorkoutExerciseScreen}
				options={({ route }) => ({ 
					headerBackTitle: '',
					title: route.params.name 
				})}
				/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'white'
	},
});