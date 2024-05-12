import styled from 'styled-components';

interface StyledRatingProps {
  $size?: 'lg' | 'sm' /* TODO 옵셔널 삭제 */;
}

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
