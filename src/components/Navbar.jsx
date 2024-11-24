import React, { useRef } from 'react'
import { TiLocation } from 'react-icons/ti'
import Button from './Button'

const Navbar = () => {
    const navContainerRef = useRef(null)

    const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"]

  return (
    <div className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6' ref={navContainerRef}>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-between p-4'>
                <div className='flex items-center gap-7'>
                    <img src="/img/logo.png" alt="logo" className='w-10' />

                    <Button
                        id="production-button"
                        title="Products"
                        rightIcon={<TiLocation />}
                        containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                    />

                    <div className="flex h-full items-center">
                        <div className='hidden md:block'>
                            {navItems.map((item, i ) =>
                                <a key={i}>{item}</a>
                            )}
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    </div>
  )
}

export default Navbar