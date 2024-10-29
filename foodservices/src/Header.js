import React from 'react';

const Header = ({ setSelectedSection }) => {
  return (
    <header className="header">
      <h1 className="logo">Food Services</h1>
      <nav className="nav">
        <ul>
          <li onClick={() => setSelectedSection('Menu')}>Menu</li>
          <li onClick={() => setSelectedSection('About')}>About Us</li>
          <li onClick={() => setSelectedSection('Contact')}>Contact</li>
          <li onClick={() => setSelectedSection('Cart')}>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
