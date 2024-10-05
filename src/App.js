import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import NavBar from './sections/NavBar';
import Footer from './sections/Footer';
import { Box } from '@mui/material';



function App() {
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
          {/* <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
