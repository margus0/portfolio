import React from 'react';
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import ProjectsList from '../components/ProjectsList/ProjectsList';

const Home = () => {
  return (
    <div id='home'>
      <Menu />
      <Hero />
      <Banner deg='diagonal' />
      <ProjectsList />
      <Banner />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
