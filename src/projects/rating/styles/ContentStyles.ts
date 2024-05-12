import styled, { keyframes } from 'styled-components';
import { ContentBox } from './LayoutStyles';

/* Content 1 */

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

/* Content 2 */

export const StyledContent2 = styled(ContentBox)`
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

  .submit-button {
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

/* Content 3 */

const heartBounce = keyframes`
 50% {
  font-size: 124px;
 }
`;

export const StyledContent3 = styled(ContentBox)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 381px;
  height: 296px;

  .heart {
    animation: ${heartBounce} 0.7s cubic-bezier(1, 0, 0, 0.99) infinite;
    color: #000;
    text-align: center;
    font-family: 'Roboto Flex';
    font-size: 135px;
    font-weight: 500;
  }
`;
