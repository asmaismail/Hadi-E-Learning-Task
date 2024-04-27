import React from "react";
import img from "../assets/404.webp";

const NoPage = () => {
  return (
    <>
      <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h2>Ooops! 😯 Page Not Found</h2>
        <img src={img} alt="" />
        <button>Back to Home</button>
      </div>
    </>
  );
};

export default NoPage;
