import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import Images from './Components/Pages/Images/Images'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
