import React from "react";

const Array = ({ data }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "pink",
          margin: "60px",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        {data.map((item) => (
          <div key={item.id}>

            Color={item.color} value={item.value}
          </div>
        ))}
      </div>
    </>
  );
};

export default Array;
