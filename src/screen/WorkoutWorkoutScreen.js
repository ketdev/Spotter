import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, List, DataTable, Chip, Divider } from 'react-native-paper';

import { WORKOUT_EXERCISE_NAVTAG } from './WorkoutExerciseScreen';

const WorkoutMock = [
    {
        icon: 'folder',
        title: 'Incline Barbell Bench Press',
        sets: '3',
        reps: '6-6-4'
    },
    {
        icon: 'folder',
        title: 'Flat Dumbbell Bench Press',
        sets: '3',
        reps: '6-6-4'
    },
    {
        icon: 'folder',
        title: 'Close Grip Bench Press',
        sets: '3',
        reps: '6-6-4'
    },
    {
        icon: 'folder',
        title: 'Seated Dumbbell Press',
        sets: '3',
        reps: '6-6-4'
    },
    {
        icon: 'folder',
        title: 'Rear Delt Flyers',
        sets: '3',
        reps: '6-6-4'
    },
    {
        icon: 'folder',
        title: 'Leg Extensions',
        sets: '4',
        reps: '10'
    },
    {
        icon: 'folder',
        title: 'Dumbbell V Ups',
        sets: '4',
        reps: '10'
    },
    {
        icon: 'folder',
        title: 'Oblique Roll Down',
        sets: '4',
        reps: '10'
    },
];

export const WORKOUT_WORKOUT_NAVTAG = 'WorkoutWorkout';

export default function WorkoutWorkoutScreen({ navigation }) {
    return (
        <ScrollView style={styles.rootContainer}>
            <Card>
                <Card.Content>
                    <Title>Leg Killer</Title>
                </Card.Content>

                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Exercise</DataTable.Title>
                        <DataTable.Title numeric>Sets</DataTable.Title>
                        <DataTable.Title numeric>Reps</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row onPress={() => navigation.navigate(WORKOUT_EXERCISE_NAVTAG, {name: "Incline Barbell Bench Press"})} >
                        <DataTable.Cell>Incline Barbell Bench Press</DataTable.Cell>
                        <DataTable.Cell numeric>3</DataTable.Cell>
                        <DataTable.Cell numeric>6-6-4</DataTable.Cell>
                    </DataTable.Row>

                </DataTable>

                <Card.Actions>
                    <Button>Add</Button>
                    <Button>Edit</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },

    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },

    container: {
        flex: 1,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#000"
    },
    title: {
        fontSize: 24
    }
});