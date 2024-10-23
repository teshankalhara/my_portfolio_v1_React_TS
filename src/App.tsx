import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Review from './pages/review/Review'
import Skill from './pages/skill/Skill'
import Work from './pages/work/Work'

import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray<HTMLElement>('.reveal-up')
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '0 bottom',
          end: 'bottom 80%',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Home />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App
