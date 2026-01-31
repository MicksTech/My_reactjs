import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Project from './pages/Project.jsx';
import Skills from './pages/Skills.jsx';
import Footer from './components/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    // Initialize AOS
    AOS.init({ duration: 1000 });

  return (
    <div className="min-h-screen w-full dark:primary-color dark:primary-color-text transition-colors duration-300">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
