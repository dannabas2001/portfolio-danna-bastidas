import { useEffect, useState } from 'react'
import { content } from './data/content'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function getLangFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const urlLang = params.get('lang')
  return urlLang === 'es' || urlLang === 'en' ? urlLang : 'en'
}

function App() {
  const [lang, setLang] = useState(getLangFromUrl)
  const t = content[lang]

  // Keep the URL in sync so the current language can be shared/bookmarked
  // (e.g. ?lang=es), without adding a routing library for a single-page site.
  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState({}, '', url)
    document.documentElement.lang = lang
  }, [lang])

  const setLanguage = (nextLang) => setLang(nextLang)
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'))

  return (
    <>
      <Header t={t} lang={lang} onToggleLang={toggleLang} onSetLang={setLanguage} />
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
