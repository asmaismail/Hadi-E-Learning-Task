import React from "react";

const ShuffleComponent = ({ whichcomp, setWhichcomp }) => {
  return (
    <>
      <div
        className="p-2 d-flex flex-row gap-3 mt-5 align-items-center"
        style={{ maxWidth: "200px" }}
      >
        <span
          className={`${whichcomp == "cats" && "bg-primary"} p-2 rounded-3`}
          role="button"
          onClick={() => setWhichcomp("cats")}
        >
          Categories
        </span>
        <span
          classNae={`${whichcomp == "list" && "bg-primary"} p-2 rounded-3`}
          role="button"
          onClick={() => setWhichcomp("list")}
        >
          Categories
        </span>
      </div>
    </>
  );
};

export default ShuffleComponent;
