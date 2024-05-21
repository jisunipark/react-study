import styled from 'styled-components';

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
