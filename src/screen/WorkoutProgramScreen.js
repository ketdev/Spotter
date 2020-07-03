import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Button, Card, Title, List, IconButton, Paragraph, DataTable, Surface, Divider } from 'react-native-paper';
const { width, height } = Dimensions.get('screen');

import ThemedSearchBar from '../components/ThemedSearchbar';
import FormButton from '../components/FormButton';

import LoadingScreen from './LoadingScreen';
import { WORKOUT_WORKOUT_NAVTAG } from './WorkoutWorkoutScreen';

import { getWorkouts } from '../data/WorkoutData'

export const WORKOUT_PROGRAM_NAVTAG = 'WorkoutProgram';

function WorkoutCard({ item: workoutItem }) {
    return (
        <Card style={styles.workout} onPress={() => 
            navigation.navigate(WORKOUT_WORKOUT_NAVTAG, {item: workoutItem})} >
            <Card.Cover source={{ uri: workoutItem.img }} />
            <Card.Content>
                <Title>{workoutItem.name}</Title>
            </Card.Content>
        </Card>
    );
}

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function WorkoutProgramScreen({ navigation }) {
    const [workouts, setWorkouts] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    // Get all workouts
    React.useEffect(() => {
        return getWorkouts(workouts => {
            setWorkouts(workouts);
        });
    }, []);

    return (
        <ScrollView style={styles.rootContainer}>
            <ThemedSearchBar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />

            {/* Workouts */}
            <Card style={styles.surface} >
                <Card.Title
                    title="My Workouts"
                    right={(props) => <IconButton {...props} icon="plus" onPress={() => {}} />}
                />
                <FlatList
                    horizontal
                    indicatorStyle='white'
                    directionalLockEnabled='true'
                    data={workouts}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => <WorkoutCard item={item}/> }
                />
            </Card>


            {/* Discover */}
            <Card style={styles.surface}>
                <List.Section>
                    <List.Subheader>Discover</List.Subheader>
                    <List.Item
                        title='All Exercises'
                        left={() => <List.Icon icon="folder" />} />
                    {/* <List.Item 
                        title="All Workouts" 
                        left={() => <List.Icon icon="folder" />} /> */}
                </List.Section>
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

    workout: {
        margin: 8,
        width: width * 2 / 3,
    },

    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
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
    },

    surface: {
        marginHorizontal: 8,
        marginBottom: 16,
        borderRadius: 10,
        elevation: 4,
    },
});