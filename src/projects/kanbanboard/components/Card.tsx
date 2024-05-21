import MoreIcon from '../assets/MoreIcon';
import 홍진경 from '../assets/홍진경.png';
import 박명수 from '../assets/박명수.png';
import { StyledCard } from '../styles/CardStyles';

export default function Card() {
  const handleMoreClick = () => {
    alert('arigato');
  };

  return (
    <StyledCard>
      <div className="top">
        <Badge />
        <button className="icon-button" type="button" onClick={handleMoreClick}>
          <MoreIcon />
        </button>
      </div>
      <span className="card-title">Code functionality of the app</span>
      <Tag />
      <ProfileStack />
    </StyledCard>
  );
}

function Badge() {
  return <div className="badge">Done</div>;
}

function Tag() {
  return <span className="tag">Bug Fix</span>;
}

function ProfileStack() {
  return (
    <div className="profile-stack">
      <img className="profile-img" src={홍진경} alt="홍진경 얼굴" />
      <img className="profile-img" src={박명수} alt="박명수 얼굴" />
    </div>
  );
}
