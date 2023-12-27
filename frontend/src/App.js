import './App.scss';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Register from './pages/register/Register.js';
import Login from './pages/login/Login.js';
import Destinations from './pages/destinations/Destinations.js';
import Categories from './pages/categories/Categories.js';
import CreateBlogPost from './pages/create-blog/CreateBlogPost.js'
import Home from './pages/home/Home.js';
import ForgotPassword from './pages/forgot-password/ForgotPassword.js';

function App() {
  return (  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/create-blog' element={<CreateBlogPost />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
