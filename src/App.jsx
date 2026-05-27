import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Competencies } from './components/Competencies'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { CurrentlyLearning } from './components/CurrentlyLearning'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollFade } from './hooks/useScrollFade'
import './index.css'

function App() {
  useScrollFade()

  return (
    <div className="bg-dark-bg text-text-primary min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <About />
        <Competencies />
        <Experience />
        <Projects />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
