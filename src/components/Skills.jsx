import Reveal from './Reveal'

const COLORS = ['violet', 'pink', 'amber', 'teal', 'blue', 'lime']

export default function Skills({ t }) {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <p className="section__eyebrow">{t.skills.eyebrow}</p>
        <h2 className="section__title">{t.skills.title}</h2>

        <div className="skills-grid">
          {t.skills.groups.map((group, i) => (
            <Reveal
              as="div"
              delay={i * 60}
              className={`skill-card skill-card--${COLORS[i % COLORS.length]}`}
              key={group.name}
            >
              <div className="skill-card__head">
                <span className="skill-card__icon">{group.icon}</span>
                <h3 className="skill-card__title">{group.name}</h3>
              </div>
              <div className="skill-card__tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="exploring">
          <p className="exploring__label">{t.skills.exploring.label}</p>
          <div className="exploring__tags">
            {t.skills.exploring.items.map((item) => (
              <span className="tag tag--exploring" key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
