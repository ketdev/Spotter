import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export const CHAT_NAVTAG = 'Chat';

export default function RoomScreen() {
  const [messages, setMessages] = useState([
    // Mock message data
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
    },
    {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1 }}
    />
  );
}