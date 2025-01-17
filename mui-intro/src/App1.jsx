import React from 'react';
import CustomButton from './components/button/CustomButton';
import CustomTypography from './components/paragraph/CustomTypography';
import Counter from './components/counter/Counter';
import Person from './components/counter/Person';
import Animal from './components/counter/Animal';
import Student from './components/counter/Student';
import Actors from './components/counter/Actors';
import Book from './components/counter/Book';

const App = () => {
  return (
    <div>
      {/* <CustomButton /> */}
      {/* <CustomTypography /> */}
      {/* <Counter /> */}
      {/* <Person /> */}
      {/* <Product /> */}
      {/* <Animal /> */}
      {/* <Student /> */}
      {/* <Actors /> */}
      <Book />
    </div>
  );
};

// .jsx file= JS + HTML
// browser doesn't process .jsx, so the above conversion must be done
// this conversion is done by a transpiler called babel in react

export default App;
