import React, { useState } from "react";

export default function Counter() {
  const [number, setNubmer] = useState(0);

  const handlePlus = () => {
    if (number === 10) return;
    setNubmer((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (number === 0) return;
    setNubmer((prev) => prev - 1);
  };

  return (
    <>
      <div>{number}</div>
      <button type="button" onClick={handlePlus}>
        +1
      </button>
      <button type="button" onClick={handleMinus}>
        -1
      </button>
    </>
  );
}
