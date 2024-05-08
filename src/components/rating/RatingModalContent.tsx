import Rating from './Rating';
import modalImg1 from '../../assets/ratingImg1.png';
import { StyledContent1, StyledContent2, StyledContent3 } from './RatingStyle';

export function RatingModalContent1() {
  return (
    <StyledContent1>
      <img src={modalImg1} alt="이미지1" />
      <span className="text">How satisfied are you with the use of our product?</span>
      <Rating size="lg" />
    </StyledContent1>
  );
}

export function RatingModalContent2() {
  return (
    <StyledContent2>
      <Rating size="sm" />
      <textarea placeholder="Tell us more..." />
      <button type="button">Send</button>
    </StyledContent2>
  );
}

export function RatingModalContent3() {
  return (
    <StyledContent3>
      <span className="heart">💛</span>
      <span className="text">
        Thank you for your feedback! We do our best to take care of our customers
      </span>
    </StyledContent3>
  );
}
