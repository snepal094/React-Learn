import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <div>A</div>
      <div>B</div>
    </React.Fragment>
  );
};

/*<React.Fragment> </React.Fragment> whenever multiple divs are to be 
   wrapped under an entity since return can only hold one value*/
// <></> is equivalent and shows the contents inside the wrap directly under the root div
// <div></div> is not optimal for wrapping since it is not necessary

export default App;
