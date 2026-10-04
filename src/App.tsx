import { About, Services } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Services />
        <Work />
        <Experience />
      </main>
      <Contact />
    </>
  )
}
