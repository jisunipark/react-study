import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 440px;
  border-radius: 40px;
  border: 0.1px solid #d7dde8;
  background: #fff;
  box-shadow: 0px 21px 74px 36px rgba(31, 70, 141, 0.1);

  .close-button {
    position: absolute;
    top: 40px;
    right: 40px;
    opacity: 1;
  }

  .text {
    color: #000;
    text-align: center;
    font-family: 'Roboto Flex';
    font-size: 28px;
    font-weight: 500;
  }
`;

export const StyledRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .rating-stars {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .rating-comment {
    color: #838ca3;
    text-align: center;
    font-family: 'Roboto Flex';
    font-size: 24px;
    font-weight: 500;
  }
`;

export const StyledContent1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 31px;
  width: 328px;
  height: 353px;

  img {
    margin-bottom: -11px;
  }
`;
