import StarIcon from '../../assets/StarIcon';
import { StyledRating } from './RatingStyle';
import { RATING_MESSAGE } from './constants';

interface StarProps {
  rating: number;
  selected: boolean;
  hoverValue: number;
  onClick: (rating: number) => void;
  onHover: (rating: number) => void;
}

interface RatingProps {
  value: number;
  hoverValue: number;
  onClick: (rating: number) => void;
  onHover: (rating: number) => void;
}

const RATINGS = [1, 2, 3, 4, 5];

function Star({ rating, selected, hoverValue, onClick, onHover }: StarProps) {
  const fill = selected ? '#FB861D' : hoverValue >= rating ? '#FFD97B' : '#E8EAF5';

  const handleOnClick = () => onClick(rating);
  const handleOnHover = () => onHover(rating);

  return (
    <button type="button" onClick={handleOnClick} onMouseOver={handleOnHover}>
      <StarIcon fill={fill} />
    </button>
  );
}

export default function Rating({ value, hoverValue, onClick, onHover }: RatingProps) {
  return (
    <StyledRating /* $size={size} */>
      <div className="rating-stars">
        {RATINGS.map((rating) => (
          <Star
            key={rating}
            rating={rating}
            selected={value >= rating}
            hoverValue={hoverValue}
            onClick={onClick}
            onHover={onHover}
          />
        ))}
      </div>
      <span className="rating-comment">{RATING_MESSAGE[value]}</span>
    </StyledRating>
  );
}
