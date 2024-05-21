import { useState } from 'react';
import { StyledKanbanboard } from '../styles/KanbanboardStyles';
import Column from './Column';
import { KanbanboardData } from '../lib/mockdata';

export default function Kanbanboard() {
  const { inProgress, done } = KanbanboardData;

  const [inProgressCards, setInProgressCards] = useState(inProgress.cards);
  const [doneCards, setDoneCards] = useState(done.cards);

  return (
    <StyledKanbanboard>
      <Column data={inProgressCards} />
      <Column data={doneCards} />
    </StyledKanbanboard>
  );
}
