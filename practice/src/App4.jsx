import React from "react";

//conditional rendering

//? example 1: odd-even

// const App = () => {
//   let num = 18;
//   let rem = num % 2;

//   return (
//     <p>
//       {num} is {rem ? "odd" : "even"}
//     </p>
//   );
// };

//can't code in JS after html inside functions in a .jsx file

//? example 2

const App4 = () => {
  let isLoggedIn = true;
  return <div>{isLoggedIn ? "You are logged in" : "You are logged out"}</div>;
};

export default App4;
