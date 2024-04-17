import CircleIcon from '../../assets/CircleIcon';
import { StyledItem } from './TodoListStyle';

export default function TodoItem() {
  return (
    <>
      <StyledItem>
        <CircleIcon />
        <span>Do a very important task</span>
      </StyledItem>
      <hr />
    </>
  );
}
