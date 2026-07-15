import Reveal from './Reveal.jsx';
import './WhyChooseUs.css';
import studyGirl from '../assets/icon2.png';

const FEATURES = [
  {
    icon: '🤫',
    title: 'Silent Environment',
    desc: 'A strictly maintained silent zone so every minute at your desk stays focused.',
  },
  {
    icon: '❄️',
    title: 'Air Conditioned Hall',
    desc: 'Climate-controlled halls keep you comfortable through long study sessions.',
  },
  {
    icon: '📶',
    title: 'High-Speed Wi-Fi',
    desc: 'Reliable, fast internet for research, mock tests and online lectures.',
  },
  {
    image: studyGirl,
    title: 'Individual Study Desk',
    desc: 'Dedicated personal desks with ample space, away from distractions.',
  },
  {
    icon: '🎥',
    title: 'CCTV Surveillance',
    desc: 'Round-the-clock CCTV monitoring for a safe, secure study environment.',
  },
  {
    icon: '🔋',
    title: 'Power Backup',
    desc: 'Uninterrupted power backup, so your study hours never lose momentum.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section why">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Why Choose Gyanoday Library</span>
          <h2>Everything you need to focus, nothing that pulls you away</h2>
          <p>
            Every detail — from lighting to layout — is designed around one goal:
            helping you study without interruption.
          </p>
        </Reveal>

        <div className="why__grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} className={`delay-${(i % 3) + 1}`}>
              <article className="why__card">
                <div className="why__icon">
                  {f.image ? (
                    <img
                      src={f.image}
                      alt={f.title}
                      className="why__icon-img"
                    />
                  ) : (
                    f.icon
                  )}
                </div>

                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}