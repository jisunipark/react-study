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
  const [hold, setHold] = useState();
  const [operator, setOperator] = useState("");

  const handleNumberClick = (e) => {
    const nextNum = Number(e.target.textContent);
    if (hold) {
      switch (operator) {
        case "+":
          setNumber(hold + nextNum);
          break;
        case "-":
          setNumber(hold - nextNum);
          break;
        case "x":
          setNumber(hold * nextNum);
          break;
        case "/":
          setNumber(hold / nextNum);
          break;
        default:
          break;
      }
    } else {
      setNumber(nextNum);
    }
  };

  const handleOperatorClick = (e) => {
    setHold(number);
    setOperator(e.target.textContent);
  };

  const handleResetClick = () => {
    setNumber(0);
    setHold();
    setOperator("");
  };

  return (
    <>
      <Container>
        <Calculated>{number}</Calculated>
        <div>
          <Button onClick={handleResetClick}>AC</Button>
          <Button onClick={handleOperatorClick}>/</Button>
        </div>
        <div>
          <Button onClick={handleNumberClick}>8</Button>
          <Button onClick={handleNumberClick}>7</Button>
          <Button onClick={handleNumberClick}>9</Button>
          <Button onClick={handleOperatorClick}>x</Button>
        </div>
        <div>
          <Button onClick={handleNumberClick}>4</Button>
          <Button onClick={handleNumberClick}>5</Button>
          <Button onClick={handleNumberClick}>6</Button>
          <Button onClick={handleOperatorClick}>-</Button>
        </div>
        <div>
          <Button onClick={handleNumberClick}>1</Button>
          <Button onClick={handleNumberClick}>2</Button>
          <Button onClick={handleNumberClick}>3</Button>
          <Button onClick={handleOperatorClick}>+</Button>
        </div>
        <div>
          <Button onClick={handleNumberClick}>0</Button>
          <Button onClick={handleOperatorClick}>=</Button>
        </div>
        <p>---------------</p>
        <p>hold: {hold}</p>
        <p>operator: {operator}</p>
      </Container>
    </>
  );
}
