import { useState } from 'react';
import Rating from './Rating';

export default function RatingInput() {
  const [value, setValue] = useState(0);

  const handleOnClick = (value: number) => {
    setValue(value);
  };

  return <Rating value={value} onClick={handleOnClick} />;
}
