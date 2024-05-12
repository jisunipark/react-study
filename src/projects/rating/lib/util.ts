import { RatingStatus } from './type';

export function eventStatus(currentValue: number, newValue: number, rating: number) {
  let status: RatingStatus = 'none';

  if (currentValue === 0) {
    if (newValue > rating) status = 'hovered';
    else if (newValue === rating) status = 'selected';
  } else {
    if (newValue >= rating) status = 'selected';
    else if (newValue > rating) status = 'hovered';
  }

  return status;
}
