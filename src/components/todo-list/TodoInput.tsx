import { StyledItem } from './TodoListStyle';
import PlusIcon from '../../assets/PlusIcon';
import { FormEventHandler } from 'react';

interface TodoInputProps {
  newTask: string;
  setNewTask: (task: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function TodoInput({ newTask, setNewTask, onSubmit }: TodoInputProps) {
  return (
    <>
      <StyledItem>
        <PlusIcon />
        <form onSubmit={onSubmit}>
          <input
            placeholder="Add your task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </form>
      </StyledItem>
      <hr className="separating-line" />
    </>
  );
}
