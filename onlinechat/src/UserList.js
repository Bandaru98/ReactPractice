import React from 'react';

const UserList = ({ onlineUsers }) => {
  return (
    <div className="user-list">
      <h2>Online Users</h2>
      <ul>
        {onlineUsers.map((user, index) => (
          <li key={index} className={user === 'You' ? 'current-user' : ''}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
