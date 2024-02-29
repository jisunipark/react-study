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
  const [number, setNumber] = useState([]);
  const [hold, setHold] = useState(0);
  const [operator, setOperator] = useState("");
  const [calculation, setCalculation] = useState([]);
  const [result, setResult] = useState(0);

  // 3 + 9 + 12 = 24
  const handleNumberClick = (e) => {
    const nextNum = Number(e.target.textContent);
    if (result) setResult(0);
    setNumber([...number, nextNum]);
    if (calculation.includes("=")) {
      setCalculation([nextNum]);
    } else setCalculation([...calculation, nextNum]);

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
    const nextOperator = e.target.textContent;
    setOperator(nextOperator);
    setCalculation([...calculation, nextOperator]);
  };

  const handleEqualClick = () => {
    setResult(hold);
    setCalculation([]);
    setHold(0);
  };

  const handleResetClick = () => {
    setNumber([]);
    setHold(0);
    setOperator("");
    setCalculation([]);
    setResult(0);
  };

  return (
    <>
      <Container>
        <Calculated>{result ? result : `${calculation.join(" ")}`}</Calculated>
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
      </Container>
    </>
  );
}
