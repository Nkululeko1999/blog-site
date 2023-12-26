import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';

function App() {
  return (  
    <BrowserRouter>
      <Header />
      <Routes>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
