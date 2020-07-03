import React from 'react';
import { View, Title, Text, Button, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';  
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

import IconBarbellOutline from '../../assets/barbell-outline.svg';

export const WORKOUT_EXERCISE_NAVTAG = 'WorkoutExercise';

export default function WorkoutExerciseScreen({ navigation }) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.innerContainer} >
                <IconBarbellOutline width='80' height='80' color='white' />
                <Text style={styles.title}>Just do it!</Text>                
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginBottom: 10
    },
    buttonLabel: {
        fontSize: 22
    }
});