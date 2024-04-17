import { ReactNode } from 'react';
import CircleIcon from '../../assets/CircleIcon';
import { StyledItem } from './TodoListStyle';
import DeleteIcon from '../../assets/DeleteIcon';

interface TodoItemProps {
  children: ReactNode;
  isDeleteMode: boolean;
}

export default function TodoItem({ children, isDeleteMode }: TodoItemProps) {
  return (
    <>
      <StyledItem>
        <button type="button">{isDeleteMode ? <DeleteIcon /> : <CircleIcon />}</button>
        <span>{children}</span>
      </StyledItem>
      <hr />
    </>
  );
}
