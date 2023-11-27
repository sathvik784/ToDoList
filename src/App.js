<<<<<<< HEAD
import './App.css';
import HomePageList from './components/HomePageList';
import HomePageCard from './components/HomePageCard';
import './styles/Card.css'

const benefitsInfo = [
  {
    "id": 1,
    "header": "Different styles for different people",
    "info": "Everyone is different, and our to-do list allows you to choose how you format your to-do list. From calendar styled, to list-styled, have your pick!"
  },
  
  {
    "id": 2,
    "header": "Sample Header",
    "info": "Sample info"
  }
]

=======
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TempNavbar from './components/TempNavbar';
import ListPage from './components/ListPage';
>>>>>>> 1638700f149d34027bceeeb886678bc5dcf83370

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