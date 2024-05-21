import MoreIcon from '../assets/MoreIcon';
import { StyledBadge, StyledCard, StyledTag } from '../styles/CardStyles';
import { Card as CardType } from '../lib/mockdata';

interface CardProps {
  data: CardType;
}

export default function Card({ data }: CardProps) {
  const { status, title, tag, profileImages } = data;

  const handleMoreClick = () => {
    alert('arigato');
  };

  return (
    <StyledCard>
      <div className="top">
        <Badge status={status} />
        <button className="icon-button" type="button" onClick={handleMoreClick}>
          <MoreIcon />
        </button>
      </div>
      <span className="card-title">{title}</span>
      <Tag tag={tag} />
      <ProfileStack imgList={profileImages} />
    </StyledCard>
  );
}

function Badge({ status }: { status: 'In Progress' | 'Done' }) {
  let color = {
    bg: '',
    text: '',
  };

  if (status === 'In Progress') {
    color.bg = '#D8E0FB';
    color.text = '#4B5FCB';
  } else if (status === 'Done') {
    color.bg = '#C4F2D6';
    color.text = '#3BA860';
  }

  return <StyledBadge color={color}>{status}</StyledBadge>;
}

function Tag({ tag }: { tag: 'Feature' | 'Improvement' | 'Bug Fix' }) {
  let color = '';
  if (tag === 'Bug Fix') color = '#9B1E27';
  else if (tag === 'Improvement') color = '#1D1C8E';
  else if (tag === 'Feature') color = '#47B589';

  return <StyledTag color={color}>{tag}</StyledTag>;
}

function ProfileStack({ imgList }: { imgList: string[] }) {
  return (
    <div className="profile-stack">
      {imgList.map((img) => (
        <img className="profile-img" src={img} alt={`${img} 얼굴`} />
      ))}
    </div>
  );
}
