import React from 'react';

const MessageList = ({ messages, currentUser }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.user === currentUser ? 'my-message' : 'other-message'}`}
        >
          <span className="message-user">{message.user}:</span> {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
