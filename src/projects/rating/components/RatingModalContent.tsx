import modalImg1 from '../assets/ratingImg1.png';
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react';
import RatingInput from './RatingInput';
import { ContentBox, StyledContentsGroup } from '../styles/LayoutStyles';
import { StyledContent1, StyledContent2, StyledContent3 } from '../styles/ContentStyles';

interface ContentsProps {
  isCurrent: boolean;
  setModalPage: Dispatch<SetStateAction<number>>;
}

export default function AllContents() {
  const [modalPage, setModalPage] = useState(1);

  return (
    <StyledContentsGroup modalPage={modalPage}>
      <Content1 isCurrent={modalPage === 1} setModalPage={setModalPage} />
      <Content2 isCurrent={modalPage === 2} setModalPage={setModalPage} />
      <Content3 isCurrent={modalPage === 3} setModalPage={setModalPage} />
    </StyledContentsGroup>
  );
}

export function Content1({ isCurrent, setModalPage }: ContentsProps) {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (name: string, value: number) => {
    setRatingValue(value);
    setModalPage(2);
  };

  return (
    <ContentBox>
      <StyledContent1 isCurrent={isCurrent}>
        <img src={modalImg1} alt="이미지1" />
        <span className="text">How satisfied are you with the use of our product?</span>
        <RatingInput name="modal1" value={ratingValue} size="lg" onChange={handleRatingChange} />
      </StyledContent1>
    </ContentBox>
  );
}

export function Content2({ isCurrent, setModalPage }: ContentsProps) {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (name: string, value: number) => {
    setRatingValue(value);
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setModalPage(3);
  };

  return (
    <ContentBox>
      <StyledContent2 isCurrent={isCurrent}>
        <RatingInput name="modal2" value={ratingValue} size="sm" onChange={handleRatingChange} />
        <textarea placeholder="Tell us more..." />
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Send
        </button>
      </StyledContent2>
    </ContentBox>
  );
}

export function Content3({ isCurrent, setModalPage }: ContentsProps) {
  return (
    <ContentBox>
      <StyledContent3 isCurrent={isCurrent}>
        <span className="heart">💛</span>
        <span className="text">
          Thank you for your feedback! We do our best to take care of our customers
        </span>
      </StyledContent3>
    </ContentBox>
  );
}
