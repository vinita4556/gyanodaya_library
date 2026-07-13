import './Footer.css';
import logo from '../assets/logo.png'; 

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Facilities', href: '#facilities' },
 
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
           <img src={logo} alt="Gyanoday Library Logo" className="footer__logo-img" />
            <span>Gyanoday Library</span>
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
            <li>50, Bima Rd, Shiv Shakti Nagar, Nagar Nigam Colony, Dewas, Madhya Pradesh 455001</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Gyanoday Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
