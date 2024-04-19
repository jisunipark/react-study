import { FormEventHandler, useId, useState } from 'react';
import TrashcanIcon from '../../assets/TrashcanIcon';
import TodoItem from './TodoItem';
import { StyledContainer } from './TodoListStyle';
import TodoInput from './TodoInput';
import { TDItem, TDList } from '../../types/TodoListTypes';

export default function TodoList() {
  const [todoList, setTodoList] = useState<TDList>([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [deleteCount, setDeleteCount] = useState(0);

  const [newTask, setNewTask] = useState<string>();

  const itemId = useId();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!newTask) return;
    const nextTodoItem: TDItem = {
      id: itemId,
      content: newTask || '',
      isChecked: false,
      isDeleted: false,
    };
    setTodoList((prev) => [...prev, nextTodoItem]);
    setNewTask('');
  };

  const handleTrashcanClick = () => {
    setIsDeleteMode(!isDeleteMode);
    setDeleteCount(0);
  };

  return (
    <StyledContainer>
      <div className="header">
        <h1>Todo List</h1>
        <button type="button" onClick={handleTrashcanClick}>
          {isDeleteMode ? (
            <TrashcanIcon fill="#E9000A" deleteCount={deleteCount} />
          ) : (
            <TrashcanIcon />
          )}
        </button>
      </div>
      <div className="todo-list">
        {todoList.map((todo, idx) => (
          <TodoItem
            key={idx}
            item={todo}
            isDeleteMode={isDeleteMode}
            setDeleteCount={setDeleteCount}
          >
            {todo.content}
          </TodoItem>
        ))}
        <TodoInput newTask={newTask || ''} setNewTask={setNewTask} onSubmit={handleSubmit} />
      </div>
    </StyledContainer>
  );
}
