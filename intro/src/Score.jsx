import React from 'react';

const Score = (props) => {
  return (
    <div
      style={{
        border: props.runs >= 100 ? '3px solid red' : '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        borderRadius: '1rem',
        margin: '1rem',
      }}
    >
      <h3>{props.name}</h3>
      <h4>Runs: {props.runs}</h4>
      {props.runs >= 100 && <h4 style={{ color: 'red' }}>Star Player</h4>}
      {/* when first condition is true, the second condition is checked during which process it is executed also*/}
    </div>
  );
};

export default Score;
