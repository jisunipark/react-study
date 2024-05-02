import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <div>
        <Link to="/calculator">Calculator</Link>
      </div>
      <div>
        <Link to="/counter">Counter</Link>
      </div>
      <div>
        <Link to="/todo">Todo List</Link>
      </div>
    </div>
  );
}
