export default function Footer({ t }) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {year} Danna Bastidas. {t.footer.rights}</p>
        <a href="#top" className="footer__top">{t.footer.backToTop} &#8593;</a>
      </div>
    </footer>
  )
}
