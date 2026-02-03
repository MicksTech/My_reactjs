import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  const [isDark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  // AOS init
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  // Dark mode effect
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-all">
        <Navbar isDark={isDark} setDark={setDark} />
        <Home />
        <About />
        <Footer />
      </div>
    </div>
  )
}

export default App
