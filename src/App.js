
import './styles/App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './components/ListPage';
import TempNavbar from './components/TempNavbar';

function App() {
  return (
    <Router>
      <TempNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listpage' element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;