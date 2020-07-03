import React, { useState } from 'react';
import { View, Title, Text, Button, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';  
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

import * as firebase from 'firebase';
import "firebase/firestore";

import IconChatboxOutline from '../../assets/chatbox-ellipses-outline.svg';

export default function AddRoomModal({ closeModal }) {
    const [roomName, setRoomName] = useState('');

    return (
        <View style={styles.rootContainer}>
            <Appbar.Header>
                <Appbar.BackAction onPress={closeModal} />
                <Appbar.Content title="Create Room" subtitle="" />                
            </Appbar.Header>
            <View style={styles.innerContainer} >
                <IconChatboxOutline width='80' height='80' color='white' />
                <Text style={styles.title}>Create a new chat room</Text>
                <FormInput
                    labelName='Room Name'
                    value={roomName}
                    onChangeText={text => setRoomName(text)}
                    clearButtonMode='while-editing'
                />
                <FormButton
                    title='Create'
                    modeValue='contained'
                    labelStyle={styles.buttonLabel}
                    onPress={() => {
                        if (roomName.length > 0) {
                            firebase.firestore()
                            .collection('THREADS')
                            .add({ name: roomName } )
                            .then(() => { closeModal(); });
                        }
                    }}
                    disabled={roomName.length === 0}
                />
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