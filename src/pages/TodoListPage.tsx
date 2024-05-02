import styled from 'styled-components';
import TodoList from '../components/todo-list/TodoList';

export default function TodoListPage() {
  return (
    <StyledPage>
      <TodoList />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(145deg, rgba(208, 215, 223, 0.2) 14.32%, rgba(53, 56, 60, 0.2) 87.8%),
    #d0d7df;
`;
