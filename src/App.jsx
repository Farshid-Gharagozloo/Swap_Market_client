import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Header from './components/Header/Header';
import './app.scss';
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import ProfilePage from './pages/ProfilePage';


function App() {

  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
      <div className="app__body">
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/user/:id' element={<ProfilePage/>} />
          <Route path='/additem' element={<AddProduct/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App
