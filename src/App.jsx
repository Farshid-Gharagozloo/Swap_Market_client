import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Header from './components/Header/Header';
import './app.css';
import Login from './pages/Login';


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
