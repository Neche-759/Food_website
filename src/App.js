// src/App.js
import './App.css';
import Body from './components/body';
import Footer from './components/footer';
import Navbar from './components/navbar';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Body/>
      <Footer/>

    </div>
  );
}

export default App;
