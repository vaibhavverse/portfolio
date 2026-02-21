import { useState } from 'react'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import WhyHireMe from './sections/WhyHireMe'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <LoadingScreen isLoading={loading} onComplete={() => setLoading(false)} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WhyHireMe />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
