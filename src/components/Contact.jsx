import { useState } from 'react';
import Reveal from './Reveal.jsx';
import './Contact.css';

const INFO = [
  { icon: '📍', label: 'Address', value: '50, Bima Rd, Shiv Shakti Nagar, Nagar Nigam Colony, Dewas, Madhya Pradesh 455001' },
  { icon: '📞', label: 'Phone', value: '+91 9826527427' },
  { icon: '✉️', label: 'Email', value: 'hello@studynest.in' },
  { icon: '🕒', label: 'Opening Hours', value: `8:00 AM – 11:00 PM , Open 7 Days a Week`, }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Contact</span>
          <h2>Visit us or send a message</h2>
          <p>Have a question about the space or facilities? Reach out — we're happy to help.</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info">
            <ul className="contact__info-list">
              {INFO.map((item) => (
                <li key={item.label}>
                  <span className="contact__info-icon">{item.icon}</span>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="contact__map-wrap" zoom>
         <div className="contact__map contact__map--large">
            <iframe
            title="Gyanoday Library Location"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470191.61029518093!2d75.43142368906254!3d22.97334590000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963179c7a942569%3A0xc79acdc669e9cfd5!2sGyanoday%20Library!5e0!3m2!1sen!2sin!4v1783589339054!5m2!1sen!2sin"
           style={{ border: 0 }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            </Reveal>

          
        </div>
      </div>
    </section>
  );
}
