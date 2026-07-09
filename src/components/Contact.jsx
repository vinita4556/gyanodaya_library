import { useState } from 'react';
import Reveal from './Reveal.jsx';
import './Contact.css';

const INFO = [
  { icon: '📍', label: 'Address', value: '2nd Floor, Ashoka Complex, Station Road, Dewas, Madhya Pradesh' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
  { icon: '✉️', label: 'Email', value: 'hello@studynest.in' },
  { icon: '🕒', label: 'Opening Hours', value: 'Open 24×7 for members · Daily Pass: 6 AM – 11 PM' },
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

            <div className="contact__map">
            <iframe
            title="Gyanoday Library Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470191.61029518093!2d75.43142368906254!3d22.97334590000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963179c7a942569%3A0xc79acdc669e9cfd5!2sGyanoday%20Library!5e0!3m2!1sen!2sin!4v1783589339054!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          > </iframe>
          </div>
          </Reveal>

          <Reveal className="contact__form-wrap" zoom>
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>Message received</h3>
                <p>Thanks for reaching out — our team will get back to you shortly.</p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your full name" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Tell us what you'd like to know" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
