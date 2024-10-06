import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import NavBar from './sections/NavBar';
import Footer from './sections/Footer';
import ProductDetails from './components/ProductDetails';
import Products from './sections/home/Products';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';
import { Box } from '@mui/material';
import Solutions from './views/Solutions';
import Contact from './sections/Contact';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '0', 
        margin: '0' 
      }}
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products/product-details" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
