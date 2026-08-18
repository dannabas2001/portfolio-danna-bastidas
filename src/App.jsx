import { useState } from 'react'
import { content } from './data/content'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [lang, setLang] = useState('en')
  const t = content[lang]

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'))

  return (
    <>
      <Header t={t} lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}

export default App
