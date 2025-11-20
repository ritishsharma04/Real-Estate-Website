import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Customer from './components/Customer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Toaster />
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Customer/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App