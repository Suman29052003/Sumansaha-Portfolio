import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Service from './components/Service'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Service/>
     <Education/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default App
