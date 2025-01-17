import React from 'react';
import Mobile from './Mobile';

const App = () => {
  return (
    <div>
      <Mobile name="Iphone 16" price="$1500">
        <p>Latest Iphone</p> {/*props children*/}
      </Mobile>
    </div>
  );
};

export default App;
