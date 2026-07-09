import { useState } from 'react';
import Reveal from './Reveal.jsx';
import './FAQ.css';

const FAQS = [
  {
    q: 'What membership options are available?',
    a: 'We offer a Daily Pass for one-off visits, a Monthly Plan for regular study, and a Quarterly Plan for long-term exam preparation. Each includes access to the study hall and shared facilities.',
  },
  {
    q: 'What are the library timings?',
    a: 'Monthly and Quarterly members get 24×7 access. Daily Pass holders can use the hall from 6:00 AM to 11:00 PM, seven days a week.',
  },
  {
    q: 'What rules should I follow inside the library?',
    a: 'Silence is maintained at all times, phones are kept on silent mode outside the hall, and desks should be kept clean for the next student. Outside food is not permitted in the reading area.',
  },
  {
    q: 'Is Wi-Fi included for every member?',
    a: 'Yes, high-speed Wi-Fi is available to every member, at every desk, throughout the day and night.',
  },
  {
    q: 'Is parking available at the library?',
    a: 'Yes, secure two-wheeler and four-wheeler parking is available on the premises for all members at no extra cost.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section id="faq" className="section section-alt faq">
      <div className="container faq__container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Answers before you visit</h2>
          <p>Everything students usually ask about membership, timings, rules, Wi-Fi and parking.</p>
        </Reveal>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}>
              <button className="faq__question" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                {item.q}
                <span className="faq__icon">+</span>
              </button>
              <div className="faq__answer-wrap">
                <p className="faq__answer">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
