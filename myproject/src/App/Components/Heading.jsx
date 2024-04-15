import React from "react";

const Heading = ({ icon, title }) => {
  return (
    <div className="flex flex row gap-2 p-2 mt-5 items-center">
      {icon}
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
