import React, { useState } from 'react';
import Header from './Header';
import FoodMenu from './FoodMenu';
import Cart from './Cart';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('Menu');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="food-services">
      <Header setSelectedSection={setSelectedSection} />

      {selectedSection === 'Menu' && <FoodMenu addToCart={addToCart} />}
      {selectedSection === 'Cart' && <Cart cart={cart} />}
      {selectedSection === 'About' && (
        <div className="section">
          <h2>About Us</h2>
          <p>Welcome to Food Services! We provide delicious meals delivered to your door.</p>
        </div>
      )}
      {selectedSection === 'Contact' && (
        <div className="section">
          <h2>Contact Us</h2>
          <p>Email: contact@foodservices.com | Phone: +1 (123) 456-7890</p>
        </div>
      )}
    </div>
  );
};

export default App;







// import React, { useState } from 'react';
// import FoodMenu from './FoodMenu';
// import Cart from './Cart';

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   return (
//     <div className="food-services">
//       <h1>Food Services</h1>
//       <FoodMenu addToCart={addToCart} />
//       <Cart cart={cart} />
//     </div>
//   );
// };

// export default App;
