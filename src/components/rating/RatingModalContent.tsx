import modalImg1 from '../../assets/ratingImg1.png';
import {
  Box,
  StyledContent1,
  StyledContent2,
  StyledContent3,
  StyledContentsGroup,
} from './RatingStyle';
import { Dispatch, SetStateAction, useState } from 'react';
import RatingInput from './RatingInput';

interface ContentsProps {
  setModalPage: Dispatch<SetStateAction<number>>;
}

export default function AllContents() {
  const [modalPage, setModalPage] = useState(1);

  return (
    <StyledContentsGroup>
      <Box>
        <Content1 setModalPage={setModalPage} />
      </Box>
      <Box>
        <Content2 setModalPage={setModalPage} />
      </Box>
      <Box>
        <Content3 />
      </Box>
    </StyledContentsGroup>
  );
}

export function Content1({ setModalPage }: ContentsProps) {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (name: string, value: number) => {
    setRatingValue(value);
    setModalPage(2);
  };

  return (
    <StyledContent1>
      <img src={modalImg1} alt="이미지1" />
      <span className="text">How satisfied are you with the use of our product?</span>
      <RatingInput name="modal1" value={ratingValue} onChange={handleRatingChange} />
    </StyledContent1>
  );
}

export function Content2({ setModalPage }: ContentsProps) {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (name: string, value: number) => {
    setRatingValue(value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setModalPage(3);
  };

  return (
    <StyledContent2 onSubmit={handleSubmit}>
      <RatingInput name="modal1" value={ratingValue} onChange={handleRatingChange} />
      <textarea placeholder="Tell us more..." />
      <button type="submit" className="submit-button">
        Send
      </button>
    </StyledContent2>
  );
}

export function Content3() {
  return (
    <StyledContent3>
      <span className="heart">💛</span>
      <span className="text">
        Thank you for your feedback! We do our best to take care of our customers
      </span>
    </StyledContent3>
  );
}
