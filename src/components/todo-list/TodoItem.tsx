import { ReactNode } from 'react';
import CircleIcon from '../../assets/CircleIcon';
import { StyledItem } from './TodoListStyle';
import DeleteIcon from '../../assets/DeleteIcon';
import { TDItem, TDList } from '../../types/TodoListTypes';

interface TodoItemProps {
  children: ReactNode;
  item: TDItem;
  todoList: TDList;
  setTodoList: (callback: (prev: TDList) => TDList) => void;
  isDeleteMode: boolean;
  setDeleteCount: (callback: (prev: number) => number) => void;
}

export default function TodoItem({
  children,
  item,
  todoList,
  setTodoList,
  isDeleteMode,
  setDeleteCount,
}: TodoItemProps) {
  const handleCheckClick = () => {
    if (isDeleteMode) return;
    setTodoList((prevList) => {
      const splitIdx = prevList.findIndex((prevItem) => prevItem.id === id);
      return [
        ...prevList.slice(0, splitIdx),
        { ...prevList[splitIdx], isChecked: !isChecked },
        ...prevList.slice(splitIdx + 1),
      ];
    });
  };

  const { id, isDeleted, isChecked } = item;

  const handleDeleteClick = () => {
    if (!isDeleteMode) return;
    setTodoList((prevList) => {
      const splitIdx = prevList.findIndex((prevItem) => prevItem.id === id);
      return [
        ...prevList.slice(0, splitIdx),
        { ...prevList[splitIdx], isDeleted: !isDeleted },
        ...prevList.slice(splitIdx + 1),
      ];
    });
    setDeleteCount((prev: number) => prev - (isDeleted ? 1 : -1));
  };

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
