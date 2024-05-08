import styled from 'styled-components';
import RatingModalLayout from '../components/rating/RatingModalLayout';

export default function RatingPage() {
  return (
    <StyledPage>
      <RatingModalLayout />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 271px 0px;
  justify-content: center;
  align-items: center;
`;
