import React from 'react'
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
  )
}

export default App