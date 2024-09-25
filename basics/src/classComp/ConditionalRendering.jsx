import React from 'react';

const ConditionalRendering = () => {
// Scenario 1: If-else condition with direct return
let age1 = 18;
if (age1 >= 18) {
  return (
    <div>
      <h1>Good to vote</h1>
      <h2>Hello</h2>
    </div>
  );
} else {
  return <h1>Bad to Vote</h1>;
}

// Scenario 2: If-else condition with content variable
// let age2 = 10;
// let content;
// if (age2 >= 18) {
//   content = <h1>Good to Vote</h1>;
// } else {
//   content = <h1>Not able to Vote</h1>;
// }
// return content;

// Scenario 3: Ternary Operator
// let age3 = 18;
// return age3 >= 18 ? (
//   <h2>User is able to Vote</h2>
// ) : (
//   <h2>User is not able to Vote</h2>
// );

// Scenario 4: Array length check
//   let data = []; // Example: use [1, 2] to test the other condition
//   return data.length > 0 ? (
//     <h2>Some data in array</h2>
//   ) : (
//     <h2>There is no data in array</h2>
//   );
};

export default ConditionalRendering;