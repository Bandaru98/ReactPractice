import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className="message">
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
