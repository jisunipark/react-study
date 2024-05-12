import { useState } from 'react';
import CloseIcon from '../assets/CloseIcon';
import AllContents from './RatingModalContent';
import { CommonLayout } from '../styles/LayoutStyles';

export default function RatingModalLayout() {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <CommonLayout>
        <button type="button" onClick={handleCloseClick} className="close-button">
          <CloseIcon />
        </button>
        <AllContents />
      </CommonLayout>
    )
  );
}
