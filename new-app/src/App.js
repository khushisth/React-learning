import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Homes'
import About from './pages/About';
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
