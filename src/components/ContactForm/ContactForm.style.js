import styled from 'styled-components';

export const Form = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  font-size: 1rem;

  h1 {
    font-size: 4vw;
    margin: 0;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50vw;
    animation: 2s anim-lineUp ease-out;
  }
  label {
    padding: 1vh 0;
  }
  input,
  textarea {
    background: #ffffff50;
    border-radius: 5px;
    border: 1px solid #7deaf4;
    color: #ffffff;
    cursor: default;
    padding: 1.5vh;
  }

  button {
    padding: 2vh;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 5vw;
    }
    form {
      width: 70vw;
    }

    @media screen and (max-width: 426px) {
      h1 {
        font-size: 5vh;
      }
      label,
      button {
        font-size: 2vh;
      }
    }
  }
`;
