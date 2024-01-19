import './styles/App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TempNavbar from './components/TempNavbar';
import ListPage from './components/ListPage';
import Register from './components/Register';
import Login from './components/Login'

function App() {
  return (
    <Router>
      <TempNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listpage' element={<ListPage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;