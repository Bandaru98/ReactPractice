
import './App.css';
import Cart from './Cart/Cart';
import BestSales from './Containers/BestSales';
import NewArrivals from './Containers/NewArrivals';
import ProductCard from './Containers/ProductCard';
import ProductDetails from './SinglePage/ProductDetails';

function App() {
  return (
    <div>
     <BestSales/>
     <NewArrivals/>
     <ProductCard/>
     <ProductDetails/>
     <Cart/>
    </div>
  );
}

export default App;
