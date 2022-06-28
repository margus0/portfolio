import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Menu = styled.menu`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2e2e2e;
  border-right: 1px solid #7deaf4;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 8vw;
  z-index: 10;

  #bars {
    display: none;
  }

  @media screen and (max-width: 768px) {
    border-right: none;
    #bars {
      display: block;
      position: absolute;
      left: 1rem;
      top: 1rem;
      font-size: 1.75rem;
    }
  }

  @media screen and (max-width: 400px) {
    width: 6vw;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #7deaf4;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Links = styled(Link)`
  border-bottom: 1px solid #7deaf4;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.1vw;
  line-height: 5vw;
  text-align: center;
  text-decoration: none;
  width: 100%;

  :hover {
    color: #7deaf4;
    font-size: 1.3vw;
    transition: ease 0.5s;
  }

  :focus {
    color: #7deaf4;
  }

  @media screen and (min-width: 2000px) {
    line-height: 8rem;
  }
`;
