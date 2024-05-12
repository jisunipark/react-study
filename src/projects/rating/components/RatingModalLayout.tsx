import { useState } from 'react';
import { StyledContainer } from '../styles/RatingStyle';
import CloseIcon from '../assets/CloseIcon';
import AllContents from './RatingModalContent';

export default function RatingModalLayout() {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <StyledContainer>
        <button type="button" onClick={handleCloseClick} className="close-button">
          <CloseIcon />
        </button>
        <AllContents />
      </StyledContainer>
    )
  );
}
