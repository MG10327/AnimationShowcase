import React from 'react'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'
import Features from './components/Features'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <AboutSection />
      <Features />
    </main>
  )
}

export default App