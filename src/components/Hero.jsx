import './Hero.css';
import logo4 from "../assets/logo4.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow hero__eyebrow">UPSC · SSC · Banking · Railway · MPPSC · JEE · NEET · GATE</span>
          <h1 className="hero__title">
            Study Better. <br />
            Focus More. <br />
            <span className="hero__title-accent">Achieve Success.</span>
          </h1>
          <p className="hero__subtitle">
            A peaceful and comfortable study space designed for serious learners —
            with comfortable seating, high-speed Wi-Fi, air-conditioned halls, and a
            completely distraction-free atmosphere.
          </p>
          <div className="hero__actions">
            <a href="#plans" className="btn btn-primary">Explore Library</a>
            <a href="#facilities" className="btn btn-ghost">View Facilities</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__focus-ring" aria-hidden="true" />
          <div className="hero__image-frame">
            <img
              src={logo4}
              alt="Students studying quietly at individual desks in a bright reading hall"
              className="hero__image"
            />
          </div>

          <div className="hero__float hero__float--top glass">
            <span className="hero__float-icon">🎓</span>
            <div>
              <strong>500+</strong>
              <p>Active Students</p>
            </div>
          </div>

          <div className="hero__float hero__float--mid glass">
            <span className="hero__float-icon">🤫</span>
            <div>
              <strong>Silent</strong>
              <p>Study Zone</p>
            </div>
          </div>

          <div className="hero__float hero__float--bottom glass">
            <span className="hero__float-icon">⏰</span>
            <div>
              <strong>12×7</strong>
              <p>Access</p>
            </div>
          </div>
        </div>
      </div>

      <svg className="hero__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,112 1440,56 L1440,120 L0,120 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
