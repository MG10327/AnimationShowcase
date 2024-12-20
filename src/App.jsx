import React from 'react'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from "./components/Story"
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <AboutSection />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App