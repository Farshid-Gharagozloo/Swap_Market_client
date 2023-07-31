import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Header from './components/Header/Header';
import './App.scss';
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import ProfilePage from './pages/ProfilePage';
import EditProduct from './pages/EditProduct';
import EditProfile from './pages/EditProfile';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductUserPage from './pages/ProductUserPage';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
      <div className="app__body">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/product/:id' element={<ProductPage/>} />
          <Route path='/user/product/:id' element={<ProductUserPage/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Login/>} />
          <Route path='/user/:id' element={<ProfilePage/>} />
          <Route path='/additem/:id' element={<AddProduct/>} />
          <Route path='/product/edit/:id' element={<EditProduct/>} />
          <Route path='/user/edit/:id' element={<EditProfile/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
