import styled, { keyframes } from 'styled-components';
import { ContentBox } from './LayoutStyles';

interface StyledContentProps {
  isCurrent: boolean;
}

/* Content 1 */

export const StyledContent1 = styled.div<StyledContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 31px;
  width: 328px;
  height: 353px;
  opacity: ${(props) => (props.isCurrent ? '1' : '0')};
  transition: opacity 0.8s;

  img {
    margin-bottom: -11px;
  }
`;

/* Content 2 */

export const StyledContent2 = styled(ContentBox)<StyledContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 400px;
  opacity: ${(props) => (props.isCurrent ? '1' : '0')};
  transition: opacity 0.8s;

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

  .submit-button {
    display: flex;
    width: 400px;
    padding: 20px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: #0b92f2;
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    &:hover {
      background: #0b7fd8;
    }
  }
`;

/* Content 3 */

const heartBounce = keyframes`
 50% {
  font-size: 124px;
 }
`;

export const StyledContent3 = styled(ContentBox)<StyledContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 381px;
  height: 296px;
  opacity: ${(props) => (props.isCurrent ? '1' : '0')};
  transition: opacity 0.8s;

  .heart {
    animation: ${heartBounce} 0.7s cubic-bezier(1, 0, 0, 0.99) infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 177px;
    color: #000;
    text-align: center;
    font-family: 'Roboto Flex';
    font-size: 135px;
    font-weight: 500;
  }
`;
