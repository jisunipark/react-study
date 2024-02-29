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
  const [result, setResult] = useState();
  const [isShown, setIsShown] = useState(false);

  // 3 + 9 + 12 = 24
  const handleNumberClick = (e) => {
    const nextNum = Number(e.target.textContent);
    setNumber(nextNum);
    if (hold) {
      switch (operator) {
        case "+":
          setHold(hold + nextNum);
          break;
        case "-":
          setHold(hold - nextNum);
          break;
        case "x":
          setHold(hold * nextNum);
          break;
        case "/":
          setHold(hold / nextNum);
          break;
        default:
          break;
      }
    } else {
      setHold(nextNum);
    }
  };

  const handleOperatorClick = (e) => {
    setOperator(e.target.textContent);
  };

  const handleEqualClick = () => {
    setResult(hold);
    setIsShown(true);
  };

  const handleResetClick = () => {
    setNumber(0);
    setHold();
    setOperator("");
    setResult(0);
    setIsShown(false);
  };

  return (
    <>
      <Container>
        <Calculated>{isShown ? result : number}</Calculated>
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
          <Button onClick={handleEqualClick}>=</Button>
        </div>
        <p>---------------</p>
        <p>hold: {hold}</p>
        <p>operator: {operator}</p>
        <p>result: {result}</p>
      </Container>
    </>
  );
}
