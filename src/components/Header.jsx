import { useEffect, useState } from 'react'

export default function Header({ t, lang, onToggleLang }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [lang])

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo">
          DB<span>.</span>
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`}>
          <a href="#about" className="nav__link" onClick={() => setOpen(false)}>{t.nav.about}</a>
          <a href="#experience" className="nav__link" onClick={() => setOpen(false)}>{t.nav.experience}</a>
          <a href="#skills" className="nav__link" onClick={() => setOpen(false)}>{t.nav.skills}</a>
          <a href="#projects" className="nav__link" onClick={() => setOpen(false)}>{t.nav.projects}</a>
          <a href="#contact" className="nav__link" onClick={() => setOpen(false)}>{t.nav.contact}</a>
          <button className="lang-toggle lang-toggle--mobile" onClick={onToggleLang}>
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>

        <div className="header__actions">
          <button className="lang-toggle" onClick={onToggleLang} aria-label="Switch language">
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
