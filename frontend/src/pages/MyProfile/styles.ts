import styled from "styled-components";

export const SProfile = styled.main` // Use styled.main ou styled.div para a página
  height: 100vh;
  background: linear-gradient(to right, #ffffff 50%, #01232F 50%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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

    a.register-link {
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
  }

  img {
    max-width: 650px;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;

    section { // ver se ficou section no profile
      max-width: 90%;
    }

    img {
      max-width: 90%;
      margin-top: 20px;
    }
  }
`;