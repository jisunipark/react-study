import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage';
import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';
import CalculatorPage from './pages/CalculatorPage';
import RatingPage from './pages/RatingPage';
import KanbanboardPage from './pages/KanbanboardPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/todo" element={<TodoListPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/kanbanboard" element={<KanbanboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
