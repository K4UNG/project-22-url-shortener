import { useState, useEffect } from 'react'

import Hero from './Hero'
import Links from './Links/Links'
import About from './About/About'

export default function Main() {
    const [currentState, setCurrentState] = useState('desktop')

    useEffect(() => {
        const width = window.innerWidth
        if (width >= 620) setCurrentState('desktop')
        else setCurrentState('mobile')
        
        const resizeHandler = () => {
            if (window.innerWidth >= 620) {
                setCurrentState('desktop')
            } else {
                setCurrentState('mobile')
            }
        }
        window.onresize = resizeHandler

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])
    return <main>
        <Hero />
        <Links state={currentState} />
        <About state={currentState} />
    </main>
}