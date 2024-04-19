import { ReactNode, useEffect, useState } from 'react';
import CircleIcon from '../../assets/CircleIcon';
import { StyledItem } from './TodoListStyle';
import DeleteIcon from '../../assets/DeleteIcon';
import { TDItem } from '../../types/TodoListTypes';

interface TodoItemProps {
  children: ReactNode;
  item: TDItem;
  isDeleteMode: boolean;
  setDeleteCount: (callback: (prev: number) => number) => void;
}

export default function TodoItem({ children, isDeleteMode, setDeleteCount }: TodoItemProps) {
  const [todoItem, setTodoItem] = useState<TDItem>({
    id: '',
    content: '',
    isChecked: false,
    isDeleted: false,
  });

  const { isChecked, isDeleted } = todoItem;

  const handleCheckClick = () => {
    if (isDeleteMode) return;
    setTodoItem((prev) => {
      return { ...prev, isChecked: true };
    });
  };

  const handleDeleteClick = () => {
    if (!isDeleteMode) return;
    if (isDeleted) {
      setTodoItem((prev) => {
        return { ...prev, isDeleted: false };
      });
      setDeleteCount((prev: number) => prev - 1);
    } else {
      setTodoItem((prev) => {
        return { ...prev, isDeleted: true };
      });
      setDeleteCount((prev: number) => prev + 1);
    }
  };

  useEffect(() => {
    setTodoItem((prev) => {
      return { ...prev, isDeleted: false };
    });
  }, [isDeleteMode]);

  return (
    <>
      <StyledItem onClick={handleDeleteClick} $isDeleteMode={isDeleteMode} $isDeleted={isDeleted}>
        <button type="button" onClick={handleCheckClick}>
          {isDeleteMode || isChecked ? <DeleteIcon /> : <CircleIcon />}
        </button>
        <span>{children}</span>
        {isDeleted && <hr className="deleting-line" />}
      </StyledItem>
      <hr className="separating-line" />
    </>
  );
}
