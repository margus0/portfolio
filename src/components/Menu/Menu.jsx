import React from 'react';
import * as Scroll from 'react-scroll';
import * as S from './Menu.styles';

const Menu = ({ handleClick }) => {
  let scroll = Scroll.animateScroll;
  return (
    <S.Menu className='main-menu'>
      <a href onClick={handleClick}>
        <i id='bars' className='fa-solid fa-bars'></i>
      </a>
      <S.Navigation display={handleClick} className='main-navigation'>
        <S.Links
          to='home'
          spy={true}
          smooth={true}
          duration={500}
          offset={-130}
          delay={200}
          ignoreCancelEvents={true}
          onClick={scroll.scrollTo('home')}
        >
          <i className='fa-solid fa-house'></i>
        </S.Links>
        <S.Links
          to='projects'
          spy={true}
          smooth={true}
          duration={500}
          delay={200}
          offset={-50}
          ignoreCancelEvents={true}
          onClick={scroll.scrollTo('projects')}
        >
          Projects
        </S.Links>
        <S.Links
          to='about'
          spy={true}
          smooth={true}
          duration={500}
          delay={200}
          ignoreCancelEvents={false}
          onClick={scroll.scrollTo('about')}
        >
          About
        </S.Links>
        <S.Links
          to='contact'
          spy={true}
          smooth={true}
          duration={500}
          delay={200}
          ignoreCancelEvents={true}
          offset={-50}
          onClick={scroll.scrollTo('contact')}
        >
          Contact
        </S.Links>
      </S.Navigation>
    </S.Menu>
  );
};

export default Menu;
