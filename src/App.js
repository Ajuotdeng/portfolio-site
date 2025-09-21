import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
//import About from './components/About.jsx';//
import Projects from './components/Projects.jsx';
//import Contact from './components/Contact.jsx';//
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
       
      </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
