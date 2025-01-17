import React from 'react';
import Score from './Score';

const playerData = [
  { id: 1, name: 'Kushal Bhurtel', runs: 30 },
  { id: 2, name: 'Shikhar Dhawan', runs: 71 },
  { id: 3, name: 'Rohit Paudel', runs: 50 },
  { id: 4, name: 'Rohit Sharma', runs: 100 },
];

const App = () => {
  return (
    <div>
      {/* <Score name="Kushal Bhurtel" runs={30} /> 
      <Score name="Shikhar Dhawan" runs={71} />
      <Score name="Rohit Paudel" runs={50} />*/}
      {/* need a {} for numbers */}

      {playerData.map((item, index, array) => {
        return <Score key={item.id} name={item.name} runs={item.runs} />;
      })}
      {/* a unique key is required. here=item.id */}
      {/* map always returns an array */}
    </div>
  );
};

export default App;
