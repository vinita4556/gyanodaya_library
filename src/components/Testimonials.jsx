import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';
import './Testimonials.css';

const REVIEWS = [
  {
    name: 'Ananya Sharma',
    exam: 'UPSC Aspirant',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
    rating: 5,
    review:
      'The silence here is unmatched. I used to lose hours to distractions at home — at StudyNest I finally cover my full daily target.',
  },
  {
    name: 'Rohit Verma',
    exam: 'SSC CGL Aspirant',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
    rating: 5,
    review:
      'Clean, well-lit, and the AC hall makes a huge difference in summer. The 24×7 access fits perfectly around my job schedule.',
  },
  {
    name: 'Priya Nair',
    exam: 'Banking Aspirant',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=160&q=80',
    rating: 5,
    review:
      'Individual desks and lockers keep my books organised, and the Wi-Fi is fast enough for every mock test I take.',
  },
  {
    name: 'Karan Mehta',
    exam: 'GATE Aspirant',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80',
    rating: 5,
    review:
      'What stands out is the discipline of the space itself — everyone here is focused, and that energy keeps me consistent.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="reviews" className="section testimonials">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>Trusted by focused learners</h2>
          <p>Real experiences from students preparing for competitive exams at StudyNest.</p>
        </Reveal>

        <div className="testimonials__slider">
          <div
            className="testimonials__track"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {REVIEWS.map((r) => (
              <div className="testimonial-card" key={r.name}>
                <div className="testimonial-card__stars" aria-label={`${r.rating} out of 5 stars`}>
                  {'★'.repeat(r.rating)}
                </div>
                <p className="testimonial-card__text">&ldquo;{r.review}&rdquo;</p>
                <div className="testimonial-card__person">
                  <img src={r.avatar} alt={`Portrait of ${r.name}`} />
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.exam}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__dots">
            {REVIEWS.map((r, i) => (
              <button
                key={r.name}
                className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                aria-label={`Show testimonial from ${r.name}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
