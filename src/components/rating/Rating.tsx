import StarIcon from '../../assets/StarIcon';
import { StyledRating } from './RatingStyle';
import { RATING_MESSAGE } from './constants';

interface StarProps {
  selected: boolean;
}

interface RatingProps {
  value?: number /* TODO 옵셔널 없애기 */;
}

const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected }: StarProps) {
  const fill = selected ? '#FB861D' : '#E8EAF5';
  return <StarIcon fill={fill} />;
}

export default function Rating({ value = 3 }: RatingProps) {
  return (
    <StyledRating /* $size={size} */>
      <div className="rating-stars">
        {RATINGS.map((rating) => (
          <Star key={rating} selected={value >= rating} />
        ))}
      </div>
      <span className="rating-comment">{RATING_MESSAGE[value]}</span>
    </StyledRating>
  );
}
