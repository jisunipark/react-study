import { useState } from 'react';

import CloseIcon from '../assets/CloseIcon';
import AllContents from './RatingModalContent';
import { StyledContainer } from '../styles/LayoutStyles';

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
