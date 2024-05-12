import styled from 'styled-components';

interface StyledContentsGroupProps {
  modalPage: number;
}

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 440px;
`;

export const CommonLayout = styled(ContentBox)`
  overflow: hidden;
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
    top: 32px;
    right: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    width: 42px;
    height: 42px;
    opacity: 1;
    z-index: 1;
    background-color: transparent;

    &:hover {
      background-color: #e1e0e4;
    }
  }

  .text {
    color: #000;
    text-align: center;
    font-family: 'Roboto Flex';
    font-size: 28px;
    font-weight: 500;
  }
`;

export const StyledContentsGroup = styled.div<StyledContentsGroupProps>`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
  height: calc(440px * 3);

  transition: transform 0.8s;
  transform: ${(props) =>
    props.modalPage === 1
      ? 'translateY(0)'
      : props.modalPage === 2
      ? 'translateY(-440px)'
      : 'translateY(-880px)'};
`;
