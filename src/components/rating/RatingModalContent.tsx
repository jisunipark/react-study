import modalImg1 from '../../assets/ratingImg1.png';
import { StyledContent1, StyledContent2, StyledContent3 } from './RatingStyle';
import { Dispatch, SetStateAction, useState } from 'react';
import RatingInput from './RatingInput';

interface RatingModalContentProps {
  setModalPage: Dispatch<SetStateAction<number>>;
}

export function RatingModalContent1({ setModalPage }: RatingModalContentProps) {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (name: string, value: number) => {
    setRatingValue(value);
  };

  return (
    <StyledContent1>
      <img src={modalImg1} alt="이미지1" />
      <span className="text">How satisfied are you with the use of our product?</span>
      <RatingInput name="modal1" value={ratingValue} onChange={handleRatingChange} />
    </StyledContent1>
  );
}

export function RatingModalContent2({ setModalPage }: RatingModalContentProps) {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (name: string, value: number) => {
    setRatingValue(value);
  };

  return (
    <StyledContent2>
      <RatingInput name="modal1" value={ratingValue} onChange={handleRatingChange} />
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
