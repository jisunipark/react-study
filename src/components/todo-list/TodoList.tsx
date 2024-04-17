import { useState } from 'react';
import TrashcanIcon from '../../assets/TrashcanIcon';
import TodoItem from './TodoItem';
import { todoListData } from './TodoListData';
import { StyledContainer } from './TodoListStyle';

export default function TodoList() {
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [deleteCount, setDeleteCount] = useState(0);

  const handleTranshcanClick = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  return (
    <StyledContainer>
      <div className="header">
        <h1>Todo List</h1>
        <button type="button" onClick={handleTranshcanClick}>
          {isDeleteMode ? (
            <TrashcanIcon fill="#E9000A" deleteCount={deleteCount} />
          ) : (
            <TrashcanIcon />
          )}
        </button>
      </div>
      <div className="todo-list">
        {todoListData.map((todo, idx) => (
          <TodoItem key={idx} isDeleteMode={isDeleteMode}>
            {todo}
          </TodoItem>
        ))}
      </div>
    </StyledContainer>
  );
}
