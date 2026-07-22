import Reveal from './Reveal.jsx';
import './Gallery.css';
import rec from "../assets/rec.png";
import student from "../assets/student.png";
import chairs from "../assets/chairs.png";
import cabins from "../assets/cabins.png";
import sitting from "../assets/sitting.png";
import ChatGpt from "../assets/ChatGpt.png";

const IMAGES = [
  {
    src: rec,
    alt: 'Reading hall with students at individual desks',
    label: 'Reading Hall',
    tall: true,
  },
  {
    src: cabins,
    alt: 'Quiet study cabins with dividers',
    label: 'Study Cabins',
  },
  {
    src: sitting,
    alt: 'Library reception desk',
    label: 'Reception',
  },
  {
    src: ChatGpt,
    alt: 'Library interior with tall bookshelves',
    label: 'Students Studying',
    tall: true,
  },
  {
    src: student,
    alt: 'Students studying together at a shared table',
    label: 'Library Interior',
  },
  {
    src: chairs,
    alt: 'Bright study hall with natural light',
    label: 'Study tables',
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
