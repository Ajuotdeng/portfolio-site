import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
//import About from './components/About.jsx';//
import Projects from './components/Projects.jsx';
//import Contact from './components/Contact.jsx';//
import Footer from './components/Footer.jsx';

function App() {
  return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
       
      </Routes>
       <Footer/>
    </Router>
    </div>
  ); 
}

export default App;
