import styled from 'styled-components';

export const About = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75vw;
  text-transform: uppercase;
  text-align: center;
  height: 100vh;
  margin-bottom: 10vw;

  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 426px) {
    font-size: 2.5vh;
  }

  ul {
    padding: 2.5vw;
  }

  ul.first-list {
    animation: 2s anim-lineUp ease-out;
    display: flex;
    background-color: #ffffff;
    justify-content: space-between;
  }

  ul.second-list {
    animation: 2s anim-lineUp ease-out;
    display: flex;
    background-color: #ffffff;
    justify-content: space-evenly;
  }

  li {
    list-style: none;
  }

  img {
    height: 6vw;
    width: 6vw;

    @media screen and (max-width: 426px) {
      height: 4.5vh;
      width: 4.5vh;
    }
  }

  a {
    color: inherit;
  }

  p {
    animation: 4s anim-lineUp ease-out;
  }
`;
