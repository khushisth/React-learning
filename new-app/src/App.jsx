import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Homes'
import About from './pages/About';
import Login from './pages/Login';
import AdminHome from './pages/Admin/Home';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard/admin" element={<AdminHome/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="light" 
      />
    </BrowserRouter>
  );
}

export default App;
