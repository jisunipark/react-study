import { useState } from 'react';
import Rating from './Rating';

export default function RatingInput() {
  const [value, setValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const handleOnClick = (rating: number) => {
    setValue(rating);
  };

  const handleOnHover = (rating: number) => {
    setHoverValue(rating);
  };

  return (
    <Rating value={value} hoverValue={hoverValue} onClick={handleOnClick} onHover={handleOnHover} />
  );
}
