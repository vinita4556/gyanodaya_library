import Reveal from './Reveal.jsx';
import './Gallery.css';

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80',
    alt: 'Reading hall with students at individual desks',
    label: 'Reading Hall',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=700&q=80',
    alt: 'Quiet study cabins with dividers',
    label: 'Study Cabins',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80',
    alt: 'Library reception desk',
    label: 'Reception',
  },
  {
    src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80',
    alt: 'Library interior with tall bookshelves',
    label: 'Library Interior',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=700&q=80',
    alt: 'Students studying together at a shared table',
    label: 'Students Studying',
  },
  {
    src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80',
    alt: 'Bright study hall with natural light',
    label: 'Study Hall',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section section-alt gallery">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Gallery</span>
          <h2>A look inside StudyNest</h2>
          <p>Step through our halls, cabins and quiet corners — designed for hours of focused work.</p>
        </Reveal>

        <div className="gallery__grid">
          {IMAGES.map((img, i) => (
            <Reveal
              zoom
              key={img.label}
              className={`gallery__item ${img.tall ? 'gallery__item--tall' : ''} delay-${(i % 3) + 1}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery__caption">{img.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
