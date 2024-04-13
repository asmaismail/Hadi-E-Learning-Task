import React, { useState } from "react";
import Array from "./Array/Array";

const App = () => {
  const showmore = () => {
    setData(data.slice(0, 20));
    console.log(setData);
  };
  const [fulldata, setFulldata] = useState(false);
  const toggleData = () => {
    setFulldata(!fulldata);
  };

  const [data, setData] = useState([
    {
      id: 1,
      color: "red",
      value: "#ea580c",
    },
    {
      id: 2,
      color: "green",
      value: "#15803d",
    },
    {
      id: 3,
      color: "blue",
      value: "#0284c7",
    },
    {
      id: 4,
      color: "cyan",
      value: "#22d3ee",
    },
    {
      id: 5,
      color: "neutral",
      value: "#a3a3a3",
    },
    {
      id: 6,
      color: "yellow",
      value: "#fde047",
    },
    {
      id: 7,
      color: "black",
      value: "#0a0a0a",
    },
    {
      id: 8,
      color: "orange",
      value: "#ea580c",
    },
    {
      id: 9,
      color: "purple",
      value: "#a855f7",
    },
    {
      id: 10,
      color: "pink",
      value: "#f472b6",
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
      value: "#f8fafc",
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
  ]);
  return (
    <>
      <div className="w-auto h-full mx-20 mt-10">
        <h1 className="font-bold text-lg text-center justify-center">Task 1</h1>
        <Array  data={fulldata ? data : data.slice(0, 10)} />
        <button onClick={toggleData}>{`${
          fulldata ? "Show Less" : "Show More"
        } `}</button>
      </div>
    </>
  );
};

export default App;
