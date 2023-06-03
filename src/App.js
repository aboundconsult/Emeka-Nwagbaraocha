import { useRef } from 'react';
import './App.css';

import About from './components/about/About';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Movies from './components/movies/Movies';
import Navbar from './components/navbar/Navbar';

function App() {
  const about_ref = useRef(null);
  const contact_ref = useRef(null);

  const scroll_to_about = () => about_ref.current.scrollIntoView({
    behaviour: "smooth"
  });

  const scroll_to_contact = () => contact_ref.current.scrollIntoView({
    behaviour: "smooth"
  });

  return (
    <div className="app d-flex item-center justify-center flex-column">
      <Navbar />
      <div className="app__container section__container">
        <Hero 
          scroll_to_about={scroll_to_about} 
          scroll_to_contact={scroll_to_contact}
        />
        <About about_ref={about_ref} />
        <Movies />
      </div>
      <Footer />
    </div>
  );
}

export default App;
