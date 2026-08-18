import Reveal from './Reveal'

export default function Projects({ t }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section__eyebrow">{t.projects.eyebrow}</p>
        <h2 className="section__title">{t.projects.title}</h2>

        <div className="projects">
          {t.projects.items.map((p, i) => (
            <Reveal
              as="article"
              delay={i * 80}
              className={`project-card ${p.placeholder ? 'project-card--placeholder' : ''}`}
              key={p.title}
            >
              {p.thumb ? (
                <div className="project-card__thumb">
                  <img src={p.thumb} alt={p.title} loading="lazy" />
                </div>
              ) : (
                p.placeholder && <div className="project-card__thumb project-card__thumb--empty"></div>
              )}
              <div className="project-card__body">
                <p className="project-card__tag">{p.tag}</p>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>

              {p.stack.length > 0 && (
                <ul className="project-card__stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              )}

              {!p.placeholder && (
                p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    {t.projects.viewSite} &#8599;
                  </a>
                ) : (
                  <span className="project-card__status">{t.projects.inactiveDomain}</span>
                )
              )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="projects-cta">
          <div>
            <p className="projects-cta__title">{t.projects.cta.title}</p>
            <p className="projects-cta__desc">{t.projects.cta.description}</p>
          </div>
          <a href="#contact" className="btn btn--primary">{t.projects.cta.button}</a>
        </Reveal>
      </div>
    </section>
  )
}
