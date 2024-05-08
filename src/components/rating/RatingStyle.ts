import styled from 'styled-components';

interface StyledRatingProps {
  $size: 'lg' | 'sm';
}

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

export const StyledRating = styled.div<StyledRatingProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.$size === 'sm' ? '12px' : '20px')};

  .rating-stars {
    display: flex;
    align-items: center;
    gap: ${(props) => (props.$size === 'sm' ? '6px' : '12px')};
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

export const StyledContent2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 400px;

  textarea {
    display: flex;
    width: 100%;
    height: 181px;
    padding: 20px;
    border-radius: 16px;
    background: #f2f6fb;
    color: #000;
    font-size: 32px;
    font-weight: 500;
    outline: none;
    resize: none;
    &::placeholder {
      color: #8890a5;
    }
  }

  button {
    display: flex;
    width: 400px;
    padding: 20px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: #0b7fd8;
    color: #fff;
    font-size: 32px;
    font-weight: 500;
  }
`;
