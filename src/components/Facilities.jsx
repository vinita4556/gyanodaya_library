import Reveal from './Reveal.jsx';
import './Facilities.css';
import library from "../assets/library.png";

const FACILITIES = [
  'Comfortable Chairs',
  'Personal Study Desks',
  'Charging Points',
  'Drinking Water',
  'RO Water',
  'Washroom',
  'Daily Cleaning',
  'Newspaper',
  'Locker Facility',
];

export default function Facilities() {
  return (
    <section id="facilities" className="section section-alt facilities">
      <div className="container facilities__grid">
        <Reveal zoom className="facilities__media">
          <img
            src={library}
            alt="A well-lit study hall with rows of desks and chairs"
          />
          <div className="facilities__media-badge glass">
            <strong>9+</strong>
            <span>Premium Facilities</span>
          </div>
        </Reveal>

        <div className="facilities__content">
          <Reveal as="div">
            <span className="eyebrow">Facilities</span>
            <h2>Thoughtfully equipped, down to the last detail</h2>
            <p className="facilities__intro">
              From the chair you sit in to the water you drink, every facility is chosen
              to keep you comfortable and focused for as long as you need.
            </p>
          </Reveal>

          <ul className="facilities__list">
            {FACILITIES.map((item, i) => (
              <Reveal as="li" key={item} className={`delay-${(i % 3) + 1}`}>
                <span className="facilities__check">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
