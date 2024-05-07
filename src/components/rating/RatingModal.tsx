import CloseIcon from '../../assets/CloseIcon';
import Rating from './Rating';
import { StyledContainer } from './RatingStyle';

export default function RatingModal() {
  return (
    <StyledContainer>
      <button type="button" className="close-button">
        <CloseIcon />
      </button>
      <Rating />
    </StyledContainer>
  );
}
