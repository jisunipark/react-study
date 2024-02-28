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
  return (
    <Container>
      <Calculated>8</Calculated>
      <div>
        <Button>AC</Button>
        <Button>/</Button>
      </div>
      <div>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>x</Button>
      </div>
      <div>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </div>
      <div>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </div>
      <div>
        <Button>0</Button>
        <Button>=</Button>
      </div>
    </Container>
  );
}
