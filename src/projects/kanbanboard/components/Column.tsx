import MoreIcon from '../assets/MoreIcon';
import { StyledColumn } from '../styles/ColumnStyles';
import Card from './Card';

export default function Column() {
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
        <Card />
        <Card />
        <Card />
      </div>
    </StyledColumn>
  );
}
