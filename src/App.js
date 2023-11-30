
import './styles/App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TempNavbar from './components/TempNavbar';
import ToDoContainer from './components/ListPageStuff/ToDoContainer';

function App() {
  return (
    <Router>
      <TempNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listpage' element={<ToDoContainer />} />
      </Routes>
    </Router>
  );
}

export default App;