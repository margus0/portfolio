import styled from 'styled-components';

export const Hero = styled.section`
  display: flex;
  align-items: flex-start;
  color: inherit;
  height: 80vh;
  width: 60vw;
  font-size: 1.25vw;

  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 60vh;
  }

  ul {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    width: 20vh;
  }

  li {
    list-style: none;
    padding: 0.5vw 2vw;

    a {
      color: inherit;
      font-size: 1.25vw;
      text-decoration: none;

      :hover {
        color: #7deaf4;
        transition: ease-in 0.2s;
      }
    }
  }

  .hero-section {
    padding: 2rem 0 0 2rem;

    h1 {
      font-size: 5vw;
      font-weight: 600;
      margin: 0;
      padding: 0 2vw;
      animation: 2s anim-lineUp ease-out;
    }

    span {
      color: #7deaf4;
    }
    p {
      animation: 4s anim-lineUp ease-out;
      padding: 1vw 2vw;
    }

    li,
    button {
      animation: 6s anim-lineUp ease-out;
    }

    @media screen and (max-width: 768px) {
      a,
      p {
        font-size: 2vw;
      }
      h1 {
        font-size: 6vw;
      }
    }

    @media screen and (max-width: 426px) {
      h1 {
        font-size: 6vh;
      }
      a,
      p {
        font-size: 2vh;
      }

      ul {
        padding: 0;
      }
    }

    @media screen and (max-width: 325px) {
      h1 {
        font-size: 5vh;
      }
    }
  }
`;
