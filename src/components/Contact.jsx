export default function Contact({ t }) {
  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <p className="section__eyebrow">{t.contact.eyebrow}</p>
        <h2 className="section__title">{t.contact.title}</h2>
        <p className="contact__desc">{t.contact.description}</p>
        <div className="contact__links">
          <a href="mailto:dannabas2001@gmail.com" className="contact__link">{t.contact.email}</a>
          <a href="https://www.linkedin.com/in/danna-bastidas-alvarado/" target="_blank" rel="noopener noreferrer" className="contact__link">{t.contact.linkedin}</a>
          <a href="https://github.com/dannabas2001" target="_blank" rel="noopener noreferrer" className="contact__link">{t.contact.github}</a>
        </div>
        <a href="/cv/Danna-Bastidas-CV.pdf" download className="btn btn--primary contact__cv">{t.contact.cv}</a>
      </div>
    </section>
  )
}
