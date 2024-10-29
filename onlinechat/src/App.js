import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState('You');
  const [onlineUsers, setOnlineUsers] = useState(['You', 'Alice', 'Bob', 'Eve']);

  const addMessage = (text) => {
    const newMessage = { id: messages.length, user: currentUser, text };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-app">
      <h1>Chat Application</h1>
      <div className="chat-container">
        <UserList onlineUsers={onlineUsers} />
        <div className="chat-section">
          <MessageList messages={messages} currentUser={currentUser} />
          <MessageInput addMessage={addMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;

