import React, { useState } from "react";

function Hoc(OriginalComponent){
  const NewComponent = () => {
    const [count, setCount] = useState(10);

    const handleClick = () => {
      setCount((prevCount) => prevCount+1);
    };

    return <OriginalComponent count={count} handleIncrement={handleClick} />;
  };

  return NewComponent;
};

export default Hoc;
