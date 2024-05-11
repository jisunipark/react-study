import { useState } from 'react';
import Rating from './Rating';

interface RatingInputProps {
  name: string;
  value: number;
  onChange: (name: string, nextValue: number) => void;
}

export default function RatingInput({ name, value, onChange }: RatingInputProps) {
  const [rating, setRating] = useState(value);

  const handleSelect = (nextValue: number) => {
    onChange(name, nextValue);
  };

  const handleMouseLeave = () => setRating(value);

  return (
    <Rating
      currentValue={value}
      newValue={rating}
      onSelect={handleSelect}
      onHover={setRating}
      onMouseLeave={handleMouseLeave}
    />
  );
}
