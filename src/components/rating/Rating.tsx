import StarIcon from '../../assets/StarIcon';
import { StyledRating } from './RatingStyle';
import { RATING_MESSAGE, STATUS_COLOR } from './constants';
import { RatingStatus } from './type';

interface StarProps {
  status: RatingStatus;
  rating: number;
  onSelect: (value: number) => void;
  onHover: (value: number) => void;
}

interface RatingProps {
  currentValue: number;
  newValue: number;
  onSelect: (value: number) => void;
  onHover: (value: number) => void;
  onMouseLeave: () => void;
}

const RATINGS = [1, 2, 3, 4, 5];

function Star({ status = 'none', rating, onSelect, onHover }: StarProps) {
  const handleClick = () => onSelect(rating);
  const handleMouseOver = () => onHover(rating);

  const fill = STATUS_COLOR[status];

  return (
    <button type="button" onClick={handleClick} onMouseOver={handleMouseOver}>
      <StarIcon fill={fill} />
    </button>
  );
}

export default function Rating({
  currentValue,
  newValue,
  onSelect,
  onHover,
  onMouseLeave,
}: RatingProps) {
  return (
    <StyledRating /* $size={size} */>
      <div className="rating-stars" onMouseLeave={onMouseLeave}>
        {RATINGS.map((rating) => {
          /* TODO 클래스 사용 시도? */
          let status: RatingStatus = 'none';

          if (currentValue === 0) {
            if (newValue > rating) status = 'hovered';
            else if (newValue === rating) status = 'selected';
          } else {
            if (newValue >= rating) status = 'selected';
            else if (newValue > rating) status = 'hovered';
          }

          return (
            <Star
              key={rating}
              status={status}
              rating={rating}
              onSelect={onSelect}
              onHover={onHover}
            />
          );
        })}
      </div>
      <span className="rating-comment">{RATING_MESSAGE[newValue]}</span>
    </StyledRating>
  );
}
