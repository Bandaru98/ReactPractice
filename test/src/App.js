import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Child from './Child';
import Childfunction from './Childfunction';
import Propfun from './diffstate&prop/Propfun';
import Stateclass from './diffstate&prop/Stateclass';

import Stateclass2 from './diffstate&prop/Stateclass2';
import Props1 from './Funprop/Props1';
import Class1 from './ClassProp/Class1';
import ClassCompProp from './ClassCompProp/ClassCompProp';
import UseRefhook from './UseRef/UseRefhook';
import UseReducer from './UseRef/UseReducer';



function App() {
  const name = {
    firstname1: 'Keerna',
    lastname1: 'Bandaruu'
  }
  const k = {
    firstname1: 'surajjj',
    lastname1: 'up'
  }

  const firstname = 'Madhu'
  const lastname = 'Bandaru'
  // ---------------
  // class comp childname
  const aryobj = [{ name: 'keer', age: 25, city: 'kadapa' },
  { name: 'keerna', age: 25, city: 'kadapaaaa' },
  { name: 'keerthi', age: 25, city: 'cud' }
  ]
  // ----------
  // fun comp
  const fruits = { name: 'Guava', color: 'green' }

  const surname = 'bandaru'
  const names = 'madhu'
  // ----------------ClassCompProp------
  const ClassCompPropobj = {
    course: 'frontend',
    period: '4months'
  }



  return (
    <div>
      <h2>{firstname} {lastname}</h2>
      <h2>{`${firstname} ${lastname}`}</h2>
      <h3>{name.firstname1} {name.lastname1}</h3>
      <Child name='Banglore' name1={name} ary={[1, 2, 3]} />
      <Child name='Kadapa' name1={k} ary={[100, 200]} />
      <Child name='Tirupati' name1={k} ary={[100, 20, 300]} />
      <Child passdata={aryobj} />
      <Childfunction pass={surname} pass1={names} />
      <Propfun fruits={fruits} />
      <Stateclass />
      <Stateclass1 />
      <Stateclass2 />
      <Props1 />
      <Class1 />

      <ClassCompProp money={1000} ClassCompPropobj={ClassCompPropobj} />
      <UseRefhook />
      <UseReducer />
    </div>
  );
}

export default App;

