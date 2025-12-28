import React from 'react'
<<<<<<< HEAD
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
=======
import Header from './Components/Header.jsx';
import './App.css';
import AboutSection from './Components/AboutSection.jsx';
import MenuSection from './Components/MenuSection.jsx';
import FeaturesSection from './Components/FeatureSection.jsx';
import CafeGallerySlideshow from './Components/CafeGallerySlideshow.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <MenuSection />
      <FeaturesSection />
      <CafeGallerySlideshow />
      <Footer />
    </>
>>>>>>> c6f70094df705067fdd2276d06e502c93ace97a2
  )
}

export default App