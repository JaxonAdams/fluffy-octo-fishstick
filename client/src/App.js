import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
