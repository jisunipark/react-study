import MoreIcon from '../assets/MoreIcon';
import { Card as CardType } from '../lib/mockdata';
import { StyledColumn } from '../styles/ColumnStyles';
import Card from './Card';

interface ColumnProps {
  title: 'In Progress' | 'Done';
  data: CardType[];
  setData: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export default function Column({ title, data, setData }: ColumnProps) {
  const handleMoreClick = () => {
    alert('ㅋㅋ');
  };

  const handleDragDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const incomingCard: CardType = JSON.parse(e.dataTransfer.getData('card'));
    incomingCard.status = title;
    setData((prev) => [...prev, incomingCard]);
  };

  return (
    <StyledColumn onDrop={handleDragDrop}>
      <div className="top">
        <span className="column-title">{title}</span>
        <button onClick={handleMoreClick}>
          <MoreIcon />
        </button>
      </div>
      <div className="cards">
        {data.map((card) => (
          <Card key={card.id} data={card} setColumnData={setData} />
        ))}
      </div>
    </StyledColumn>
  );
}
