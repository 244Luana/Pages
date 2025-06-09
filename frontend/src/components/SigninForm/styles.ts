import styled from "styled-components";

export const SSignin = styled.div`
  height: 100vh;
  display: flex;
  background: linear-gradient(to right, #ffffff 50%, #01232F 50%);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    max-width: 50%;
    flex: 1;

    h1 {
      font-size: 35px;
      color: #01232F;
      font-weight: 500;
      font-family: 'Eczar', serif;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;

      label {
        font-size: 16px;
        color: #01232F;
      }

      input {
        padding: 12px;
        border: none;
        border-radius: 12px;
        background-color: #f0f0f0;
        font-size: 14px;
      }

      button {
        padding: 12px;
        border: none;
        border-radius: 12px;
        background-color: #aef7f7;
        color: #001f26;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s;

        &:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        &:hover:not(:disabled) {
          background-color: #7eecec;
        }
      }

      p {
        font-size: 14px;
        margin-top: 10px;
        color: red;

        a {
          font-weight: bold;
          color: #01232F;
          text-decoration: underline;
        }
      }
    }
  }

  .image-side {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 80%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    section, .image-side {
      max-width: 100%;
      padding: 20px;
    }

    .image-side {
      order: -1;
    }

    img {
      max-width: 90%;
      margin-top: 20px;
    }
  }
`;
