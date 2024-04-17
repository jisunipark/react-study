import TrashcanIcon from '../../assets/TrashcanIcon';
import TodoItem from './TodoItem';
import { StyledContainer } from './TodoListStyle';

export default function TodoList() {
  return (
    <StyledContainer>
      <div className="header">
        <h1>Todo List</h1>
        <TrashcanIcon />
      </div>
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </StyledContainer>
  );
}
