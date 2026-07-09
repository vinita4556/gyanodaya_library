import './Footer.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Plans', href: '#plans' },
];

const QUICK_LINKS = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { label: 'Instagram', icon: '📷', href: '#' },
  { label: 'Facebook', icon: '📘', href: '#' },
  { label: 'YouTube', icon: '▶️', href: '#' },
  { label: 'WhatsApp', icon: '💬', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-mark">SN</span>
            StudyNest
          </a>
          <p>
            A peaceful, distraction-free self study library for serious competitive
            exam aspirants — UPSC, SSC, Banking, Railway, MPPSC, JEE, NEET and GATE.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="footer__social">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Navigation</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li>Station Road, Dewas, MP</li>
            <li>+91 98765 43210</li>
            <li>hello@studynest.in</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} StudyNest Self Study Library. All rights reserved.</p>
          <p>Designed for focused minds.</p>
        </div>
      </div>
    </footer>
  );
}
