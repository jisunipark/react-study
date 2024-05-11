import { useMemo, useState } from 'react';
import CloseIcon from '../../assets/CloseIcon';
import {
  RatingModalContent1,
  RatingModalContent2,
  RatingModalContent3,
} from './RatingModalContent';
import { StyledContainer } from './RatingStyle';

export default function RatingModalLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const [modalPage, setModalPage] = useState(1);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const modalContent = useMemo(() => {
    switch (modalPage) {
      case 1:
        return <RatingModalContent1 setModalPage={setModalPage} />;
      case 2:
        return <RatingModalContent2 setModalPage={setModalPage} />;
      case 3:
        return <RatingModalContent3 />;
    }
  }, [modalPage]);

  return (
    isOpen && (
      <StyledContainer>
        <button type="button" onClick={handleCloseClick} className="close-button">
          <CloseIcon />
        </button>
        {modalContent}
      </StyledContainer>
    )
  );
}
