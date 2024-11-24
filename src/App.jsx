import React from 'react'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <AboutSection />
    </main>
  )
}

export default App