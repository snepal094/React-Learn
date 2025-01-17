import React from 'react';

//? conditional rendering

//* example 1: odd-even
// const App = () => {
//   let num = 20;
//   let remainder = num % 2;

//   //   if (remainder === 0) {
//   //     return <p>{num} is an even number.</p>;
//   //   } else {
//   //     return <p>{num} is an odd number.</p>;
//   //   }

//   return (
//     <p>{remainder ? `${num} is an odd number` : `${num} is an even number`}</p>
//   );
// };

//* example 2
const App = () => {
  let isLoggedIn = true;
  return <p>{isLoggedIn ? 'You are logged in.' : 'You are logged out.'}</p>;
};

export default App;
