
import './App.css';
import Exfolder from './Exfolder';
import ExUseEffect from './ExHooks/ExUseEffect';
import ExUseReducer from './ExHooks/ExUseReducer';
import ExUseReducer2 from './ExHooks/ExUseReducer2';
import ExUseRef from './ExHooks/ExUseRef';
import ExUseState from './ExHooks/ExUseState';
import ExProp from './ExProp';
import CompA from './ExPropsdrill/CompA';
import Comp from './ExScrollTop&Popmsg/Comp';
import Navbar from './ExScrollTop&Popmsg/Navbar';
import CompAA from './ExUseContext/CompAA';
import Routing from './ExScrollTop&Popmsg/Routing/Routing'
import Scroll from './ExScrollTop&Popmsg/Scroll';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  let obj = {
    name: 'xyz',
    city: 'kadapa',
  }
  let nums = [1, 2, 43, 45]
  return (
    <div>

      {/* -----components------- */}

      {/* <Exfolder />
      <ExProp name='abc' user={obj} user1={nums} />
      <CompA cn='React' />
      <CompAA />
      <ExUseState />
      <ExUseEffect />
      <ExUseReducer />
      <ExUseReducer2 />
      <ExUseRef /> */}

        {/* ExScrollTop&Popmsg---folder---------- */}
        {/* <Comp />
      <Navbar />
      <Routing />
      <Scroll /> */}
      {/* ---------- */}

    </div>
  );
}

export default App;
