import styled from "styled-components";

export const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 96px auto;
  padding: 24px;
  width: 480px;
  height: 180px;
  background-color: #fff;
  border: 1px solid #939393;
  border-radius: 12px;

  & .count {
    color: #323232;
    font-size: 48px;
    font-weight: 700;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;

  & button {
    width: 120px;
    padding: 10px;
    font-size: 24px;
    background-color: white;
    border: 1px solid #939393;
    border-radius: 8px;
  }
`;
