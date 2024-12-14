import React from "react";

const Score = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 16,
      }}
    >
      <p>{props.name}</p>
      <p>{props.runs}</p>
      {props.runs >= 100 && <h4>Star Player</h4>}
    </div>
  );
};

export default Score;
