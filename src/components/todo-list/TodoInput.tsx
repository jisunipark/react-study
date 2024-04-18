import { useState } from 'react';
import { StyledItem } from './TodoListStyle';
import PlusIcon from '../../assets/PlusIcon';

interface TodoInputProps {
  todoList: string[];
  setTodoList: (callback: (prev: string[]) => string[]) => void;
}

export default function TodoInput({ todoList, setTodoList }: TodoInputProps) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = () => {
    setTodoList((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <StyledItem>
        <PlusIcon />
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Add your task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </form>
      </StyledItem>
      <hr className="separating-line" />
    </>
  );
}
