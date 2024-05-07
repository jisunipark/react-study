import styled from 'styled-components';
import RatingModal from '../components/rating/RatingModal';

export default function RatingPage() {
  return (
    <StyledPage>
      <RatingModal />
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
