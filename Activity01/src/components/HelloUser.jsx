import React from "react";

const HelloUser = ({ name, color }) => {
  return (
    <>
      <p style={{ color: color }}>
        Hello, <strong>{name}</strong>
      </p>
    </>
  );
};

export default HelloUser;
