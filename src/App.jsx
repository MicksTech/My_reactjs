import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <div className='min-h-screen w-full'>
        <Navbar />
        <Home />
      </div>
    </>
  )
}

export default App
