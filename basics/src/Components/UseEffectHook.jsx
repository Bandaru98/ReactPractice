import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    getdata();
  }, [counter]); // Empty dependency array to run only on mount

  const getdata = async () => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let res = await data.json();
    console.log(res);
    setUsers(res);

  };
  const handleChange = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <button className='btn btn-primary' onClick={handleChange}>Click</button>
      <h2>{counter}</h2>
      <div className='container m-2'>
        <table className='table table-striped table-hover'>
          <thead className='table-primary text'>
            <tr>
              <th>Id</th>
              <th>UserName</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curELe) => (
              <tr key={curELe.id}>
                <td>{curELe.id}</td>
                <td>{curELe.username}</td>
                <td>{curELe.name}</td>
                <td>{curELe.email}</td>
                <td>{curELe.address.city}</td>
                <td>{curELe.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UseEffectHook;


/*
  Syntax:
  useEffect(()=>{}, dependencies)
  => Use effect hook is used to handle side effect in React functional component. Whenever component loads or renders the useEffect hook will run for one time minimum. and If any state change in component it will run again. To ignore this effect we use dependencies.
  => UseEffect hook will take two parameters: 1. CB function 2. Dependencies
  => CB function: It will handle all the side effects. (Example: API calls, Pagination, Toggle etc)
  => Dependencies: Based on dependencies we will call the effect hook.
  => In dependencies we can have two types => [], [state]
  => [] => When we pass empty array as an dependency the useEffect hook will run only one time when component renders.
  => [state]=>(state inside an array)=> When we pass any state inside an array as an dependency the useEffect hook will run whenever that particular state changes.
  */