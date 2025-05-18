// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from './pages/Experience';

function App() {
  return (
    <>
      <Navbar/>
      <About />
      <Experience/>
    </>
  )
}

export default App
