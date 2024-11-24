import React, { useRef } from 'react'
import AnimatedTitle from "./AimatedTitle"
import gsap from 'gsap'

const Story = () => {

    const frameRef = useRef()

    const handleMouseLeave = () => {
        const element = frameRef.current

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }

    const handleMouseMove = () => {
        const {clientX, clientY} = 3
        const element = frameRef.current

        if(!element) return // If the element doesn't exist then exit the function

        const rect = element.getBoundingClient()
        const x = clientX - rect.left
        const y = clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY ) - centerY) * -10
        const rotateY = ((x - centerX ) - centerX) * 10

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className="flex size-full flex-col items-center py-10 pb-24">
            <p className='font-general text-sm uppercase md:text-[10px]'>The multiversal ip world</p>

            <div className="relative size-full">
                <AnimatedTitle
                title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"
                sectionId="#story"
                containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                />

                <div className="story-img-container">
                    <div className="story-img-mask">
                        <div className="story-img-content">
                            <img
                                ref={frameRef}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                src="img/entrance.webp"
                                alt="entrance"
                                className='object-contain'
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Story