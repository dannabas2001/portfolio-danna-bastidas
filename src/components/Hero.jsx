export default function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero__blob hero__blob--one" aria-hidden="true"></div>
      <div className="hero__blob hero__blob--two" aria-hidden="true"></div>
      <div className="container hero__inner">
        <p className="hero__eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero__name">{t.hero.name}</h1>
        <h2 className="hero__title">{t.hero.title}</h2>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">{t.hero.ctaPrimary}</a>
          <a href="#contact" className="btn btn--ghost">{t.hero.ctaSecondary}</a>
          <a href="/cv/Danna-Bastidas-CV.pdf" download className="btn btn--ghost">{t.hero.cta}</a>
        </div>
      </div>
    </section>
  )
}
