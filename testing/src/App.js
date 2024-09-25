import './App.css';
import Comp from './Comp';
import Navbar from './Navbar';

import Routing from './Routing';
import ScrollTB from './ScrollTB/ScrollTB';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <div>
      <Comp/>
      <Navbar />
      <Routing />
      <ScrollTB/>
   
    </div>
  )
}

export default App

