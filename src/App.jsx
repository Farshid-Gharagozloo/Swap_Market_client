import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Header from './components/Header/Header';
import './app.css';
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import ProfilePage from './pages/ProfilePage';


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/user/:id' element={<ProfilePage/>} />
        <Route path='/additem' element={<AddProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
