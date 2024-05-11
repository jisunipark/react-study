import StarIcon from '../../assets/StarIcon';
import { StyledRating } from './RatingStyle';
import { RATING_MESSAGE, STATUS_COLOR } from './constants';

interface StarProps {
  selected: boolean;
  rating: number;
  onSelect: (value: number) => void;
  onHover: (value: number) => void;
}

interface RatingProps {
  value: number;
  onSelect: (value: number) => void;
  onHover: (value: number) => void;
  onMouseLeave: () => void;
}

const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected = false, rating, onSelect, onHover }: StarProps) {
  const fill = selected ? STATUS_COLOR['selected'] : STATUS_COLOR['none'];
  const handleClick = () => onSelect(rating);
  const handleMouseOver = () => onHover(rating);

  return (
    <button type="button" onClick={handleClick} onMouseOver={handleMouseOver}>
      <StarIcon fill={fill} />
    </button>
  );
}

export default function Rating({ value, onSelect, onHover, onMouseLeave }: RatingProps) {
  return (
    <StyledRating /* $size={size} */>
      <div className="rating-stars" onMouseLeave={onMouseLeave}>
        {RATINGS.map((rating) => (
          <Star
            key={rating}
            selected={value >= rating}
            rating={rating}
            onSelect={onSelect}
            onHover={onHover}
          />
        ))}
      </div>
      <span className="rating-comment">{RATING_MESSAGE[value]}</span>
    </StyledRating>
  );
}
