import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MessagesScreen, { MESSENGER_NAVTAG } from '../screen/MessagesScreen';
import AddRoomModal, { ADD_ROOM_NAVTAG } from '../modal/AddRoomModal';

const Stack = createStackNavigator();

export default function MessengerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MESSENGER_NAVTAG} component={MessagesScreen} />
    </Stack.Navigator>
  );
}