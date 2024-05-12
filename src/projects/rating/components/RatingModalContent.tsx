import modalImg1 from '../assets/ratingImg1.png';
import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from 'react';
import RatingInput from './RatingInput';
import { ContentBox, StyledContentsGroup } from '../styles/LayoutStyles';
import { StyledContent1, StyledContent2, StyledContent3 } from '../styles/ContentStyles';

interface ContentsProps {
  setShouldMove: Dispatch<SetStateAction<boolean>>;
}

export default function AllContents() {
  const [shouldMove, setShouldMove] = useState(false);

  return (
    <StyledContentsGroup shouldMove={shouldMove}>
      <Content1 setShouldMove={setShouldMove} />
      <Content2 setShouldMove={setShouldMove} />
      <Content3 />
    </StyledContentsGroup>
  );
}

export function Content1({ setShouldMove }: ContentsProps) {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (name: string, value: number) => {
    setRatingValue(value);
    setShouldMove(true);
  };

  return (
    <ContentBox>
      <StyledContent1>
        <img src={modalImg1} alt="이미지1" />
        <span className="text">How satisfied are you with the use of our product?</span>
        <RatingInput name="modal1" value={ratingValue} onChange={handleRatingChange} />
      </StyledContent1>
    </ContentBox>
  );
}

export function Content2({ setShouldMove }: ContentsProps) {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (name: string, value: number) => {
    setRatingValue(value);
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShouldMove(true);
  };

  useEffect(() => {
    setShouldMove(false);
  }, []);

  return (
    <ContentBox>
      <StyledContent2>
        <RatingInput name="modal1" value={ratingValue} onChange={handleRatingChange} />
        <textarea placeholder="Tell us more..." />
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Send
        </button>
      </StyledContent2>
    </ContentBox>
  );
}

export function Content3() {
  return (
    <ContentBox>
      <StyledContent3>
        <span className="heart">💛</span>
        <span className="text">
          Thank you for your feedback! We do our best to take care of our customers
        </span>
      </StyledContent3>
    </ContentBox>
  );
}
