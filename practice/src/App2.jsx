import React from "react";

// always wrap elements in React.fragment or div since functions return a single entity
const App2 = () => {
  return (
    <React.Fragment>
      <div>App</div>
    </React.Fragment>
  );
};

export default App2;
