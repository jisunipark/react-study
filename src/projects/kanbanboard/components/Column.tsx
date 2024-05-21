import MoreIcon from '../assets/MoreIcon';
import { Card as CardType } from '../lib/mockdata';
import { StyledColumn } from '../styles/ColumnStyles';
import Card from './Card';

interface ColumnProps {
  data: CardType[];
}

export default function Column({ data }: ColumnProps) {
  const handleMoreClick = () => {
    alert('ㅋㅋ');
  };

  return (
    <StyledColumn>
      <div className="top">
        <span className="column-title">In Progress</span>
        <button onClick={handleMoreClick}>
          <MoreIcon />
        </button>
      </div>
      <div className="cards">
        {data.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </StyledColumn>
  );
}
