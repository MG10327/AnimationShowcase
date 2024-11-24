import React from 'react'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <AboutSection />
    </main>
  )
}

export default App