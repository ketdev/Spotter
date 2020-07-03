import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import {AuthContext} from '../provider/AuthProvider';
import SwipeModal from '../components/SwipeModal';
import { COLOR_TEXT } from '../components/Theme';
import ProfileModal from '../modal/ProfileModal';

const AVATAR_SIZE = 32;
const AVATAR_BORDER_SIZE = 35;

export default function HeaderLogo({ ...props }) {
    const [ modalVisible, setModalVisible ] = React.useState(false);

    const hasAvatarImage = true;
	const onClose = () => setModalVisible(false);
    
    return (
        <>
            <TouchableOpacity
                style={styles.avatar}
                onPress={() => setModalVisible(true)}>
                {hasAvatarImage ? (
                    <Avatar.Image size={AVATAR_SIZE}
                        source={{ uri: "https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/81336463_514722789249514_5802441215634833408_n.jpg?_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_ohc=SZ7VWNP6H7EAX8av9P8&oh=1246054ffa5d3806bdf63e235cad2e28&oe=5F2559DF" }} />
                ) : (
                    <Avatar.Text size={AVATAR_SIZE} label="DK" />
                )}
            </TouchableOpacity>

            <SwipeModal visible={modalVisible} onClose={onClose}>
                <ProfileModal closeModal={onClose} />
            </SwipeModal>
        </>
    );
}
const styles = StyleSheet.create({
    avatar :{
        margin: 12,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: COLOR_TEXT,
        height: AVATAR_BORDER_SIZE,
        width: AVATAR_BORDER_SIZE,
        borderRadius: 20,
    }
});