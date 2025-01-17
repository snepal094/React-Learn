import Actors from './components/component/Actors';
import Animal from './components/component/Animal';
import Book from './components/component/Book';
import Counter from './components/component/Counter';
import CustomButton from './components/button/CustomButton';
import CustomTypography from './components/paragraph/CustomTypography';
import Person from './components/component/Person';
import React from 'react';
import Student from './components/component/Student';
const App = () => {
  return (
    <div>
      {/* <CustomButton /> */}
      {/* <CustomTypography /> */}
      {/* <Counter /> */}
      {/* <Person /> */}
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
