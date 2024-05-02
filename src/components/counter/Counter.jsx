import React, { useState } from 'react';
import { Buttons, StyledCounter } from './CounterStyle';

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
    <StyledCounter>
      <div className="count">{number}</div>
      <Buttons>
        <button type="button" onClick={handleMinus}>
          -
        </button>
        <button type="button" onClick={handlePlus}>
          +
        </button>
      </Buttons>
    </StyledCounter>
  );
}
