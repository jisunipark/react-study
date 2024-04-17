import { ReactNode, useEffect, useState } from 'react';
import CircleIcon from '../../assets/CircleIcon';
import { StyledItem } from './TodoListStyle';
import DeleteIcon from '../../assets/DeleteIcon';

interface TodoItemProps {
  children: ReactNode;
  isDeleteMode: boolean;
  setDeleteCount: (callback: (prev: number) => number) => void;
}

export default function TodoItem({ children, isDeleteMode, setDeleteCount }: TodoItemProps) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteClick = () => {
    if (!isDeleteMode) return;
    setIsDeleted(!isDeleted);
    if (!isDeleted) setDeleteCount((prev: number) => prev + 1);
    else setDeleteCount((prev: number) => prev - 1);
  };

  useEffect(() => {
    setIsDeleted(false);
  }, [isDeleteMode]);

  return (
    <>
      <StyledItem onClick={handleDeleteClick} $isDeleteMode={isDeleteMode} $isDeleted={isDeleted}>
        <button type="button">{isDeleteMode ? <DeleteIcon /> : <CircleIcon />}</button>
        <span>{children}</span>
        {isDeleted && <hr className="deleting-line" />}
      </StyledItem>
      <hr className="separating-line" />
    </>
  );
}
