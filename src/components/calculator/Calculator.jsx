import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  border: 1px solid black;
  padding: 20px;
`;

const Calculated = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 100%;
`;

export default function Calculator() {
  const [number, setNumber] = useState(0);

  const handleNumberClick = (e) => {
    const nextNum = e.target.textContent;
    setNumber(nextNum);
  };

  const handleResetClick = () => {
    setNumber(0);
  };

  return (
    <Container>
      <Calculated>{number}</Calculated>
      <div>
        <Button onClick={handleResetClick}>AC</Button>
        <Button>/</Button>
      </div>
      <div>
        <Button onClick={handleNumberClick}>8</Button>
        <Button onClick={handleNumberClick}>7</Button>
        <Button onClick={handleNumberClick}>9</Button>
        <Button>x</Button>
      </div>
      <div>
        <Button onClick={handleNumberClick}>4</Button>
        <Button onClick={handleNumberClick}>5</Button>
        <Button onClick={handleNumberClick}>6</Button>
        <Button>-</Button>
      </div>
      <div>
        <Button onClick={handleNumberClick}>1</Button>
        <Button onClick={handleNumberClick}>2</Button>
        <Button onClick={handleNumberClick}>3</Button>
        <Button>+</Button>
      </div>
      <div>
        <Button onClick={handleNumberClick}>0</Button>
        <Button>=</Button>
      </div>
    </Container>
  );
}
