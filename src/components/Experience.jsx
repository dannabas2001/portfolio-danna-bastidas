import { useState } from 'react'
import Reveal from './Reveal'

const COLORS = ['violet', 'pink', 'amber', 'teal']

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function Experience({ t }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <p className="section__eyebrow">{t.experience.eyebrow}</p>
        <h2 className="section__title">{t.experience.title}</h2>

        <div className="accordion">
          {t.experience.items.map((job, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal as="article" delay={i * 70} className="accordion__item" key={`${job.company}-${job.role}`}>
                <button
                  type="button"
                  className="accordion__header"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className={`accordion__badge ${job.logo ? 'accordion__badge--logo' : `accordion__badge--${COLORS[i % COLORS.length]}`}`}>
                    {job.logo ? (
                      <img src={job.logo} alt={job.company} />
                    ) : (
                      initials(job.company)
                    )}
                  </span>
                  <span className="accordion__heading">
                    <span className="accordion__role">{job.role}</span>
                    <span className="accordion__meta">{job.company} · {job.period}</span>
                  </span>
                  <span className={`accordion__chevron ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                    &#9662;
                  </span>
                </button>

                <div className={`accordion__panel ${isOpen ? 'is-open' : ''}`}>
                  <ul className="timeline__bullets">
                    {job.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
