import styled from "styled-components";

export const SPassword = styled.form`
  height: 100vh;
  background: linear-gradient(to right, #ffffff 50%, #01232F 50%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 40%;
    gap: 20px;
  }

  h1 {
    font-size: 35px;
    color: #01232F;
    font-weight: 500;
    font-family: 'Eczar', serif;
    text-align: left;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;

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

    a {
      font-size: 12px;
      color: #01232F;
      text-align: right;
      text-decoration: none;
    }

    a[href="index.html"] {
      display: inline-block;
      padding: 15px 40px;
      background-color: #aef7f7;
      color: #001f26;
      text-decoration: none;
      border-radius: 50px;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
    }

    p {
      font-size: 14px;
      margin-top: 10px;

      a {
        font-weight: bold;
        color: #01232F;
        text-decoration: underline;
        font-size: 14px;
      }
    }
  }

  img {
    max-width: 650px;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;

    section {
      max-width: 90%;
    }

    img {
      max-width: 90%;
      margin-top: 20px;
    }
  }
`;
