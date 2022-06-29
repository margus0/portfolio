import React, { useState } from 'react';
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import ProjectsList from '../components/ProjectsList/ProjectsList';

const Home = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    display !== false ? setDisplay(false) : setDisplay(true);
  };
  return (
    <div id='home'>
      <Menu handleClick={handleClick} />
      {display && <MobileMenu display={handleClick} />}
      <Hero />
      <Banner deg='diagonal' />
      <ProjectsList />
      <Banner />
      <About />
      <Banner deg='diagonal' />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
