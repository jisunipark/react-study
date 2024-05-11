import modalImg1 from '../../assets/ratingImg1.png';
import { StyledContent1, StyledContent2, StyledContent3 } from './RatingStyle';
import { Dispatch, SetStateAction } from 'react';
import RatingInput from './RatingInput';

interface RatingModalContentProps {
  setModalPage: Dispatch<SetStateAction<number>>;
}

export function RatingModalContent1({ setModalPage }: RatingModalContentProps) {
  return (
    <StyledContent1>
      <img src={modalImg1} alt="이미지1" />
      <span className="text">How satisfied are you with the use of our product?</span>
      <RatingInput />
    </StyledContent1>
  );
}

export function RatingModalContent2({ setModalPage }: RatingModalContentProps) {
  return (
    <StyledContent2>
      <RatingInput />
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
