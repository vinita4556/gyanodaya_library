import Reveal from './Reveal.jsx';
import './Membership.css';

const PLANS = [
  {
    name: 'Daily Pass',
    price: '₹79',
    period: '/ day',
    tagline: 'Try the space, no commitment.',
    features: ['Full-day desk access', 'High-speed Wi-Fi', 'Drinking & RO water', 'Silent study hall'],
    highlighted: false,
  },
  {
    name: 'Monthly Plan',
    price: '₹1,499',
    period: '/ month',
    tagline: 'Our most popular plan.',
    features: [
      'Reserved personal desk',
      'AC hall access',
      'Locker facility',
      '24×7 entry',
      'Charging point',
      'Daily newspaper',
    ],
    highlighted: true,
  },
  {
    name: 'Quarterly Plan',
    price: '₹3,999',
    period: '/ 3 months',
    tagline: 'Best value for long-term prep.',
    features: [
      'Everything in Monthly',
      'Priority desk selection',
      'Locker facility included',
      'Guest study passes',
    ],
    highlighted: false,
  },
];

export default function Membership() {
  return (
    <section id="plans" className="section membership">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Membership Plans</span>
          <h2>Simple, transparent plans for every kind of aspirant</h2>
          <p>Choose the rhythm that fits your preparation — from a single focused day to a full quarter.</p>
        </Reveal>

        <div className="membership__grid">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} className={`delay-${i + 1}`}>
              <article className={`plan-card ${plan.highlighted ? 'plan-card--highlight' : ''}`}>
                {plan.highlighted && <span className="plan-card__badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <p className="plan-card__tagline">{plan.tagline}</p>
                <div className="plan-card__price">
                  <span className="plan-card__amount">{plan.price}</span>
                  <span className="plan-card__period">{plan.period}</span>
                </div>
                <ul className="plan-card__features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`btn btn-block ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`}
                >
                  View Plan Details
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
