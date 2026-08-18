import { useEffect, useState } from 'react'

export default function Header({ t, lang, onSetLang }) {
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
        </nav>

        <div className="header__actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-switch__option ${lang === 'en' ? 'is-active' : ''}`}
              onClick={() => onSetLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-switch__option ${lang === 'es' ? 'is-active' : ''}`}
              onClick={() => onSetLang('es')}
            >
              ES
            </button>
          </div>
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
