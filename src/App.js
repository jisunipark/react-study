import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage';
import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';
import CalculatorPage from './pages/CalculatorPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/todo" element={<TodoListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
