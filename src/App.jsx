import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Leading from './components/Leading'
import Download from './components/Download'
import Testimonials from './components/Testimonials'
import Article from './components/Article'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <Leading/>
        <Download />
        <Testimonials />
        <Article />
        <Footer />
      </div>
     
    </>
  )
}

export default App
