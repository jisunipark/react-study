import { useEffect, useState } from 'react';
import TrashcanIcon from '../../assets/TrashcanIcon';
import TodoItem from './TodoItem';
import { StyledContainer } from './TodoListStyle';
import TodoInput from './TodoInput';

export default function TodoList() {
  const currentTodoList = localStorage.getItem('todoList');
  const defaultTodoList: string[] = currentTodoList ? JSON.parse(currentTodoList) : [];

  const [todoList, setTodoList] = useState<string[]>(defaultTodoList);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [deleteCount, setDeleteCount] = useState(0);

  const handleTranshcanClick = () => {
    setIsDeleteMode(!isDeleteMode);
    setDeleteCount(0);
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

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
        {todoList.map((todo, idx) => (
          <TodoItem key={idx} isDeleteMode={isDeleteMode} setDeleteCount={setDeleteCount}>
            {todo}
          </TodoItem>
        ))}
        <TodoInput todoList={todoList} setTodoList={setTodoList} />
      </div>
    </StyledContainer>
  );
}
