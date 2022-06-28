import styled from 'styled-components';

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2vw;
  width: 80vw;

  div.text {
    animation: 4s anim-lineUp ease-out;
    position: relative;
    top: 6vw;
    left: 3vh;
    width: 50%;
    z-index: 5;

    @media screen and (max-width: 768px) {
      top: 12vw;
      h2 {
        font-size: 3vw;
      }
      p {
        font-size: 1.75vw;
      }
    }

    @media screen and (max-width: 426px) {
      top: 20vw;
      h2 {
        font-size: 2.5vh;
      }
      p {
        font-size: 1.75vh;
        width: 60vw;
      }
    }

    @media screen and (max-width: 426px) {
      top: 15vh;
    }
  }

  img {
    animation: 2s anim-lineUp ease-out;
    border-radius: 3px;
    filter: brightness(50%);
    height: 30vw;

    @media screen and (max-width: 768px) {
      height: 40vw;
    }

    &:hover {
      filter: brightness(80%);
      transition: ease-in 0.2s;
    }
  }

  a {
    animation: 2s anim-lineUp ease-out;
    color: inherit;
    text-decoration: none;
  }
  strong {
    color: #7deaf4;
  }

  div.flex {
    display: flex;
  }

  p,
  h2 {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    button {
      font-size: 2vw;
    }

    @media screen and (max-width: 426px) {
      button {
        font-size: 2vh;
      }
    }
  }
`;
