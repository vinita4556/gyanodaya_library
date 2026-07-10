import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Facilities from './components/Facilities.jsx';

import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Facilities />  
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
