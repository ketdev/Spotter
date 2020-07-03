import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';  

import IconCreateOutline from '../../assets/create-outline.svg';

function EditIcon ({ size, color }) {
    return (
        <IconCreateOutline width={size} height={size} color={color} />
  );
}

export default function ProfileModal({ closeModal }) {
    return (
        <View style={styles.rootContainer}>
            <Appbar.Header>
                <Appbar.BackAction onPress={closeModal} />
                <Appbar.Content title="Profile" subtitle="" />    
                <Appbar.Action icon={EditIcon} onPress={() => {}} />    
            </Appbar.Header>
            <View style={styles.innerContainer} >
                <IconCreateOutline width='80' height='80' color='white' />
                <Text style={styles.title}>Profile</Text>                
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
    }
});