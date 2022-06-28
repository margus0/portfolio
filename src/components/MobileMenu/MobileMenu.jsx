import React from 'react';
import * as S from './MobileMenu.style';

const MobileMenu = ({ display }) => {
  return (
    <S.Menu>
      <S.Navigation>
        <a href className='exit'>
          <i onClick={display} className='fa-solid fa-x'></i>
        </a>
        <S.Links to='/projects'>Projects</S.Links>
        <S.Links to='/about'>About</S.Links>
        <S.Links to='/contact'>Contact</S.Links>
      </S.Navigation>
    </S.Menu>
  );
};

export default MobileMenu;
