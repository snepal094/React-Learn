import React from 'react';

const divStyle = {
  width: '400px',
  padding: '1rem',
  border: '1px solid black',
  borderRadius: '10px',
};

const imgStyle = {
  height: '400px', //or height:400 (style values in string or number)
  width: '100%',
};

const Person = (props) => {
  //   console.log('Hello World');
  console.log(props);
  return (
    <div style={divStyle}>
      <img src={props.image} alt={props.alt} style={imgStyle} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default Person;
