import StarIcon from '../../assets/StarIcon';
import { StyledRating } from './RatingStyle';
import { RATING_MESSAGE } from './constants';

interface StarProps {
  rating: number;
  selected: boolean;
  onClick: (key: number) => void;
}

interface RatingProps {
  value: number;
  onClick: (key: number) => void;
}

const RATINGS = [1, 2, 3, 4, 5];

function Star({ rating, selected, onClick }: StarProps) {
  const fill = selected ? '#FB861D' : '#E8EAF5';

  const handleOnClick = () => onClick(rating);

  return (
    <button type="button" onClick={handleOnClick}>
      <StarIcon fill={fill} />
    </button>
  );
}

export default function Rating({ value, onClick }: RatingProps) {
  return (
    <StyledRating /* $size={size} */>
      <div className="rating-stars">
        {RATINGS.map((rating) => (
          <Star key={rating} rating={rating} selected={value >= rating} onClick={onClick} />
        ))}
      </div>
      <span className="rating-comment">{RATING_MESSAGE[value]}</span>
    </StyledRating>
  );
}
