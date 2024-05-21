import { StyledKanbanboard } from '../styles/KanbanboardStyles';
import Column from './Column';

export default function Kanbanboard() {
  return (
    <StyledKanbanboard>
      <Column />
      <Column />
    </StyledKanbanboard>
  );
}
