import styled from 'styled-components';
import Kanbanboard from '../projects/kanbanboard/components/Kanbanboard';

export default function KanbanboardPage() {
  return (
    <StyledPage>
      <Kanbanboard />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
