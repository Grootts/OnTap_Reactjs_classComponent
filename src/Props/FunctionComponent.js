import React from "react";

function FunctionComponent(props) {
  const { name, sach } = props.student;
  return (
    <div>
      FunctionComponent
      <h3>{name}</h3>
      {sach.map((tenSach, index) => {
        return <h3 key={index}>{tenSach}</h3>;
      })}
      <img
        src={props.srcImage}
        alt={props.srcImage}
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
}

export default FunctionComponent;
