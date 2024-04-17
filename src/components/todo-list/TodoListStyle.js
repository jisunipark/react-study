import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 800px;
  height: 868px;
  display: flex;
  padding: 80px 72px 32px 72px;
  flex-direction: column;
  gap: 40px;
  background: #f8f8f8;
  box-shadow: 0px 8px 40.2px 13px rgba(0, 0, 0, 0.07);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #000;
      font-family: Roboto;
      font-size: 48px;
      font-weight: 600;
    }
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;

    hr {
      width: 656px;
      height: 1.2px;
      background: #f1f1f1;
    }
  }
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  span {
    color: #252525;
    font-family: Roboto;
    font-size: 24px;
  }

  button {
    width: 20px;
    height: 20px;
  }
`;
