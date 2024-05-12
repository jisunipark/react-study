import styled from 'styled-components';

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 440px;
`;

export const CommonLayout = styled(ContentBox)`
  /* overflow: hidden; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const StyledContentsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: calc(440px * 3);
`;
