import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorties from './pages/Favorites';
import Detials from './pages/Details';

function App() {
  return (
    <div>
      <div className="min-h-screen p=6 bg-indigo-50 text-gray-600 taxt-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorties />}></Route>
          <Route path="recipe-item/:id" element={<Detials />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
