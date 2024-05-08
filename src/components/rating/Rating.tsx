import StarIcon from '../../assets/StarIcon';
import { StyledRating } from './RatingStyle';

interface RatingProps {
  size: 'lg' | 'sm';
}

export default function Rating({ size }: RatingProps) {
  return (
    <StyledRating $size={size}>
      <div className="rating-stars">
        <StarIcon size={size} />
        <StarIcon size={size} />
        <StarIcon size={size} />
        <StarIcon size={size} />
        <StarIcon size={size} />
      </div>
      <span className="rating-comment">Select an option</span>
    </StyledRating>
  );
}
