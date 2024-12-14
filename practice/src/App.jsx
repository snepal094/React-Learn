import React from "react";
import Score from "./Score";

const playerData = [
  {
    id: 1,
    name: "Kushal Bhurtel",
    runs: 30,
  },
  {
    id: 2,
    name: "Shikhar Dhawan",
    runs: 71,
  },
  {
    id: 3,
    name: "Rohit Paudel",
    runs: 100,
  },
];

const App = () => {
  return (
    // <div>
    //   <Score name="Kushal Bhurtel" runs={30} />
    //   {/* need curly brackets for any value other than string */}
    //   <Score name="Shikhar Dhawan" runs={71} />
    //   <Score name="Rohit Paudel" runs={50} />
    // </div>
    <div>
      {playerData.map((item, index, array) => {
        return <Score key={item.id} name={item.name} runs={item.runs} />;
      })}
    </div>
  );
};

export default App;
