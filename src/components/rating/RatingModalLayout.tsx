import CloseIcon from '../../assets/CloseIcon';
import { RatingModalContent1 } from './RatingModalContent';
import { StyledContainer } from './RatingStyle';

export default function RatingModalLayout() {
  return (
    <StyledContainer>
      <button type="button" className="close-button">
        <CloseIcon />
      </button>
      <RatingModalContent1 />
    </StyledContainer>
  );
}
