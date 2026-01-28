import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <>
      <div className='min-h-screen w-full'>
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  )
}

export default App
