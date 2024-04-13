import React, { useState } from "react";
import Array from "./Array/Array";

const App = () => {
  const [data, setData] = useState(
    [
      {
        id: 1,
        color: "red",
        value: "#f00",
      },
      {
        id: 2,
        color: "green",
        value: "#0f0",
      },
      {
        id: 3,
        color: "blue",
        value: "#00f",
      },
      {
        id: 4,
        color: "cyan",
        value: "#0ff",
      },
      {
        id: 5,
        color: "magenta",
        value: "#f0f",
      },
      {
        id: 6,
        color: "yellow",
        value: "#ff0",
      },
      {
        id: 7,
        color: "black",
        value: "#000",
      },
      {
        id: 8,
        color: "orange",
        value: "#ffa500",
      },
      {
        id: 9,
        color: "purple",
        value: "#800080",
      },
      {
        id: 10,
        color: "pink",
        value: "#ffc0cb",
      },
      {
        id: 11,
        color: "brown",
        value: "#a52a2a",
      },
      {
        id: 12,
        color: "gray",
        value: "#808080",
      },
      {
        id: 13,
        color: "white",
        value: "#fff",
      },
      {
        id: 14,
        color: "lime",
        value: "#00ff00",
      },
      {
        id: 15,
        color: "olive",
        value: "#808000",
      },
      {
        id: 16,
        color: "maroon",
        value: "#800000",
      },
      {
        id: 17,
        color: "navy",
        value: "#000080",
      },
      {
        id: 18,
        color: "teal",
        value: "#008080",
      },
      {
        id: 19,
        color: "silver",
        value: "#c0c0c0",
      },
      {
        id: 20,
        color: "gold",
        value: "#ffd700",
      },
    ],
  );
  return (
    <>
      <div className="w-full h-full">
        <h1 className="font-bold text-lg" style={{display:'flex', textAlign:'center', color:'purple', marginTop:'30px', justifyContent:'center', }}>Task 1</h1>
        <Array data={data} />
      </div>
    </>
  );
};

export default App;
