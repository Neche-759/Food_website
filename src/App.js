// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/body';
import Footer from './components/footer';
import Navbar from './components/navbar';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
