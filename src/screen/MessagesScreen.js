import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { List, Divider, Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SwipeModal from '../components/SwipeModal';
import ThemedSearchBar from '../components/ThemedSearchbar';
import { AuthContext } from '../provider/AuthProvider';

import LoadingScreen from './LoadingScreen';

import AddRoomModal from '../modal/AddRoomModal';

import { CHAT_NAVTAG } from './RoomScreen';

import * as firebase from 'firebase';
import "firebase/firestore";

export const MESSENGER_NAVTAG = 'Messenger';

export default function MessagesScreen({ navigation }) {
    const { user } = React.useContext(AuthContext);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');

    const [threads, setThreads] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const onChangeSearch = query => setSearchQuery(query);
    const onClose = () => setModalVisible(false);

    React.useEffect(() => {
        const unsubscribe = firebase.firestore()
            .collection('THREADS')
            .onSnapshot(querySnapshot => {
                const threads = querySnapshot.docs.map(documentSnapshot => {
                    return {
                        _id: documentSnapshot.id,
                        // give defaults
                        name: '',
                        ...documentSnapshot.data()
                    };
                });
                setThreads(threads);

                if (loading) {
                    setLoading(false);
                }
            });
        // unsubscribe listener
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <ThemedSearchBar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            <Title>All chat rooms will be listed here</Title>
            <Title>{user ? user.uid : ''}</Title>

            <View style={styles.container}>
                <FlatList
                    data={threads}
                    keyExtractor={item => item._id}
                    ItemSeparatorComponent={() => <Divider />}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(CHAT_NAVTAG, { thread: item })}
                        >
                            <List.Item
                                title={item.name}
                                description='Item description'
                                titleNumberOfLines={1}
                                titleStyle={styles.listTitle}
                                descriptionStyle={styles.listDescription}
                                descriptionNumberOfLines={1}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>

            <FormButton
                modeValue='contained'
                title='Add Room'
                onPress={() => setModalVisible(true)}
            />

            <SwipeModal visible={modalVisible} onClose={onClose}>
                <AddRoomModal closeModal={onClose} />
            </SwipeModal>
        </View>
    );
};


const styles = StyleSheet.create({
    text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    container: {
        flex: 1,
        width: '100%',
    },
    listTitle: {
        fontSize: 22,
        color: "white",
    },
    listDescription: {
        fontSize: 16
    }
});