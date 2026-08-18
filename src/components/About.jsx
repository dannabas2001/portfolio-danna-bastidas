import Reveal from './Reveal'

export default function About({ t }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section__eyebrow">{t.about.eyebrow}</p>
        <h2 className="section__title section__title--big">{t.about.title}</h2>
        <div className="about__body">
          {t.about.paragraphs.map((p, i) => (
            <Reveal as="p" delay={i * 80} className="bio" key={i}>{p}</Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
