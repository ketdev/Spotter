import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {Appbar, Avatar} from 'react-native-paper';

/*TEMP*/ import SwipeModal from '../components/SwipeModal';
/*TEMP*/ import {AuthContext} from '../provider/AuthProvider';
/*TEMP*/ import ProfileModal from '../modal/ProfileModal';

import {COLOR_TEXT} from './Theme';
import IconMenu from "../../assets/menu.svg";
import Title from "../../assets/spotter-title.svg";

export default function HeaderLayout({ scene, previous, navigation }){
	// const { logout } = useContext(AuthContext);
    const [ modalVisible, setModalVisible ] = useState(false);
	
	const hasAvatarImage = true;
	const onClose = () => setModalVisible(false);
	const onBack = () => navigation.pop();

	return (
		<>
		<Appbar.Header>
			{previous ? (
				<Appbar.BackAction onPress={onBack} color={COLOR_TEXT} />
			) : (
				<TouchableOpacity style={{ paddingLeft: 8 }} >
					<IconMenu color={COLOR_TEXT} width='30' height='30'/>
				</TouchableOpacity>
			)}

			<Appbar.Content title={<Title color={COLOR_TEXT} />} subtitle={''} />
			
			<TouchableOpacity
                onPress={() => setModalVisible(true)}>
				{hasAvatarImage ? (
					<Avatar.Image size={44}
					source={{uri: "https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/81336463_514722789249514_5802441215634833408_n.jpg?_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_ohc=SZ7VWNP6H7EAX8av9P8&oh=1246054ffa5d3806bdf63e235cad2e28&oe=5F2559DF"}} />
				) : (
					<Avatar.Text size={44} label="DK" />
					
				)}
			</TouchableOpacity>
		</Appbar.Header>
		
		<SwipeModal visible={modalVisible} onClose={onClose}>
			<ProfileModal closeModal={onClose} />
		</SwipeModal>
		</>
	);
}