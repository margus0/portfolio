import React from 'react';
import Button from '../Button/Button';
import * as S from './Hero.styles';

const Hero = () => {
  return (
    <S.Hero>
      <div className='hero-section'>
        <h1>
          Hi, I'm <span>Marius</span> & I'm Jr. Web Developer
        </h1>
        <p>Looking for my first Jr. Front-End / Full-stack developer job.</p>
        <ul>
          <li>
            <a href='https://github.com/mariusGood'>
              <i className='fa-brands fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/marius-g-7b9034217/'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='mailto:mariusgudinas@gmail.com'>
              <i className='fa-solid fa-envelope'></i>
            </a>
          </li>
        </ul>
      </div>
    </S.Hero>
  );
};

export default Hero;
