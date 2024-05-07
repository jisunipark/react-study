import StarIcon from '../../assets/StarIcon';
import { StyledRating } from './RatingStyle';

export default function Rating() {
  return (
    <StyledRating>
      <div className="rating-stars">
        <StarIcon size="lg" />
        <StarIcon size="lg" />
        <StarIcon size="lg" />
        <StarIcon size="lg" />
        <StarIcon size="lg" />
      </div>
      <span className="rating-comment">Select an option</span>
    </StyledRating>
  );
}
