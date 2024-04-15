import React, { useState } from "react";

const useCats = () => {
  const [cats, setCats] = usestate([
    "react",
    "javascript",
    "microservrices",
    "abc",
    "xyz",
  ]);
  const [newcats, setNewcats] = useState()
  return (
    <>
    cats, newcats
    </>
  );
};

export default useCats;
