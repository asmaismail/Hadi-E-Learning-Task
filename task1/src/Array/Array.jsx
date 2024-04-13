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
          <div
            key={item.id} style={{backgroundColor: item.value, padding:"5px"}}
            className="flex flex-row justify-between gap-x-11 "
          >
            <p className="font-bold text-lg"> Color={item.color}</p>
            {/* value={item.value} */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Array;
