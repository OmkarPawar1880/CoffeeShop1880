import React from 'react'
import './App.css'
import Header from './Components/Header'  
import Hero from './Components/Hero'
import OurStory from './Components/Story'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import Feature from './Components/Feature'
import Whychooseus from './Components/Whychooseus'
import CafeGallerySlideshow from './Components/CafeGallerySlideshow'
import Testimonials from './Components/Testimonials'
import VisitUs from './Components/VisitUs'
import CallToAction from './Components/CallToAction'









const App = () => {
  return (
   <>
   <Header />
   <Hero />
   <Whychooseus />
   <OurStory />
   <Feature />
   <Menu />
   <CafeGallerySlideshow />
   <Testimonials />
   <VisitUs />
   <CallToAction />
   <Footer />
   
   </>
  )
}

export default App