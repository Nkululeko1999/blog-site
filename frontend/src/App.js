import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Register from './pages/register/Register.js';

function App() {
  return (  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
