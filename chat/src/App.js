import React, { useState } from 'react';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput';

const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    const newMessage = { id: messages.length, text };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-app">
      <h1>Chat Application</h1>
      <MessageList messages={messages} />
      <MessageInput addMessage={addMessage} />
    </div>
  );
};

export default App;

