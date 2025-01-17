import React from 'react';

const Mobile = (props) => {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Price: {props.price}</h3>
      {props.children}
    </div>
  );
};

export default Mobile;
